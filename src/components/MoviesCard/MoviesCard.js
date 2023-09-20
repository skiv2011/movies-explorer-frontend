import { BASE_URL_MOVIES } from "../../utils/constants";
import "./MoviesCard.css";

function MoviesCard({
  movie,
  savedMovies,
  onLike,
  onDislike,
  isSubmiting,
  place,
}) {
  const imagURl = movie.image.url
    ? `${BASE_URL_MOVIES}${movie.image.url}`
    : movie.image;

  const onClickCard = () => {
    window.open(movie.trailerLink, "_blank", "noreferrer");
  };

  const minutesToHours = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}ч ${minutes}м`;
  };

  const handleCardLike = () => {
    if (isLiked) {
      const savedMovieId = savedMovies.find((obj) => obj.id === movie.id)._id;
      onDislike(savedMovieId);
    } else {
      onLike(movie);
    }
  };

  const checkIfLiked = (movie, savedMovies) => {
    return Array.isArray(savedMovies) && savedMovies.some((savedMovie) => savedMovie.id === movie.id);
  };
  

  const isLiked = checkIfLiked(movie, savedMovies);

  const btnIcon = place === "saved" ? "card__icon-del" : "card__icon-saved";
  const btnClass = isLiked
    ? `card__button ${
        place === "saved" ? "card__button_delete" : "card__button_unlike"
      }`
    : "card__button card__button_like";

  return (
    <li className="card">
      <div className="card__content">
        <img
          src={imagURl}
          alt={movie.nameRU}
          className="card__img"
          onClick={onClickCard}
        />
        <div className="card__description">
          <div>
            <h2 className="card__title">{movie.nameRU}</h2>
            <p className="card__duration">{minutesToHours(movie.duration)}</p>
          </div>

          <button
            className={btnClass}
            onClick={handleCardLike}
            disabled={isSubmiting}
          >
            {isLiked ? <span className={btnIcon} /> : ""}
          </button>
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;
