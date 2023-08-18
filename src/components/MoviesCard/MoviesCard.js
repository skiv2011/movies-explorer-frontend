import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ title, duration, img }) {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false)
  const handleLikeClick = () => {
    setIsLiked(!isLiked)
  };

  return (
    <li className="card">
      <img src={img} alt={title} className="card__img" />
      <div className='card__description'>
        <div>
          <p className="card__title">{title}</p>
          <p className="card__duration">{duration}</p>
        </div>
        {location.pathname === '/movies' || location.pathname === '/movies/' ? (
          <button
            className={`movie-card__button movie-card__button_like ${isLiked ? 'movie-card__button_unlike' : ''}`}
            onClick={handleLikeClick}
          ></button>
        ) : (
          <button className="movie-card__button movie-card__button_delete"></button>
        )}
      </div>
    </li>
  );
}

export default MoviesCard;
