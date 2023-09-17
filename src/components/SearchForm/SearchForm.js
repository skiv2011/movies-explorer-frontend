import { useState, useEffect } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch, isGlobalSearch, setSearchError, isSubmiting }) {
  const [isChecked, setIsChecked] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (isGlobalSearch) {
      const userCheckedBefore = localStorage.getItem("isChecked");
      setIsChecked(userCheckedBefore === "true" ? true : false);
      const userSearchBefore = localStorage.getItem("search");
      setSearchValue(userSearchBefore ? userSearchBefore : "");
    }
  }, []);

  const toggleCheckbox = (e) => {
    setIsChecked(e.target.checked);
    setSearchError({ isError: false, text: "" });
    onSearch({
      isShortFilm: e.target.checked,
      keywords: searchValue,
      isGlobalSearch: isGlobalSearch,
    });
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    setIsDisabled(!e.target.value ? true : false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchError({ isError: false, text: "" });
  
    if (isGlobalSearch) {
      localStorage.setItem("search", searchValue);
    }
    onSearch({
      isShortFilm: isChecked,
      keywords: searchValue,
      isGlobalSearch: isGlobalSearch,
    });
  };

  useEffect(() => {
    setIsDisabled(isSubmiting ? true : false);
  }, [isSubmiting]);

  return (
    <div className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={handleSubmit}>
          <input
            className="search__input"
            placeholder="Фильм"
            required
            value={searchValue}
            onChange={handleChange}
          />
          <button
            className="search__submit-btn"
            type="submit"
            disabled={isDisabled}
          />
        </form>
        <div className="checkbox">
          <label className="checkbox__content">
            <input
              className="checkbox__input"
              type="checkbox"
              onChange={toggleCheckbox}
              checked={isChecked}
              disabled={isSubmiting}
            />
            <span className="checkbox__slider" />
            <span className="checkbox__name">Короткометражки</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
