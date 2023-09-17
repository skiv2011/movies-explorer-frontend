import { SHORTS_DURATION_MIN } from "./constants";

export const filterMovies = (movies, searchParams, setSearchError) => {
  const searchResult = movies.filter((movie) =>
    movie.nameRU.toLowerCase().includes(searchParams.keywords.toLowerCase())
  );

  if (searchParams.isGlobalSearch) {
    localStorage.setItem("movies", JSON.stringify(searchResult));
    localStorage.setItem("isChecked", JSON.stringify(searchParams.isShortFilm));
  }

  if (searchResult.length < 1) {
    setSearchError({ isError: true, text: "Ничего не найдено" });
    return [];
  }

  if (searchParams.isShortFilm) {
    const filterResult = searchResult.filter(
      ({ duration }) => duration <= SHORTS_DURATION_MIN
    );
    localStorage.setItem("movies", JSON.stringify(filterResult));
    setSearchError(
      filterResult < 1
        ? { isError: true, text: "Ничего не найдено" }
        : { isError: false, text: "" }
    );
    return filterResult;
  }

  setSearchError({ isError: false, text: "" });
  return searchResult;
};
