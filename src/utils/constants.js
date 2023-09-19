const BASE_URL_MAIN = 'http://localhost:3000';
// const BASE_URL_MAIN = "https://api.movies.skiv2011.nomoreparties.sbs";

export const BASE_URL_MOVIES = "https://api.nomoreparties.co";

export const apiConfigMain = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  signIn: `${BASE_URL_MAIN}/signin`,
  signUp: `${BASE_URL_MAIN}/signup`,
  logout: `${BASE_URL_MAIN}/logout`,
  user: `${BASE_URL_MAIN}/users/me`,
  movies: `${BASE_URL_MAIN}/movies`,
};

export const apiConfigMovies = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  movies: `${BASE_URL_MOVIES}/beatfilm-movies`,
};

export const REG_EMAIL = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const REG_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
export const REG_NAME = /^[a-zA-ZА-Яа-яЁё'\- ]{2,}$/;

export const SHORTS_DURATION_MIN = 40;
export const SCREEN_L = {
  minWidth: 1280,
  renderItemsCount: 12,
  renderMoreCount: 3,
};
export const SCREEN_M = {
  minWidth: 1010,
  renderItemsCount: 8,
  renderMoreCount: 2,
};
export const SCREEN_S = {
  minWidth: 480,
  renderItemsCount: 5,
  renderMoreCount: 2,
};
