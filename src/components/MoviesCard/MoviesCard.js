import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({ title, duration, img }) {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <li className="card">
      <div className="card__content">
        <img src={img} alt={title} className="card__img" />
        <div className="card__description">
          <div>
            <h2 className="card__title">{title}</h2>
            <p className="card__duration">{duration}</p>
          </div>
          {location.pathname === "/movies" ||
          location.pathname === "/movies/" ? (
            <button
              className={`card__button card__button_like ${
                isLiked ? "card__button_unlike" : ""
              }`}
              onClick={handleLikeClick}
            ></button>
          ) : (
            <button className="card__button card__button_delete"></button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;
