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
  minWidth: 768,
  renderItemsCount: 8,
  renderMoreCount: 2,
};
export const SCREEN_S = {
  minWidth: 320,
  renderItemsCount: 5,
  renderMoreCount: 2,
};
// export const SCREEN_SMALL = 320
// export const SCREEN_MIDDLE = 768
// export const SCREEN_LARGE = 1280
// export const MOVIES_SMALL = 5
// export const MOVIES_SMALL_TO_ADD = 2
// export const MOVIES_MIDDLE = 8
// export const MOVIES_MIDDLE_TO_ADD = 2
// export const MOVIES_LARGE = 16
// export const MOVIES_LARGE_TO_ADD = 4
// export const SHORT_TIMING = 40