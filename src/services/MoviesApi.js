export const BASE_URL = 'https://api.nomoreparties.co';
export const PATH = '/beatfilm-movies';

export const getAllMovies = () => fetch(BASE_URL + PATH, {
  headers: {
    'Content-Type': 'application/json',
  },
}).then((response) => {
  if (response) {
    return response.json();
  }
  throw new Error(`Ошибка: ${response.status}`);
})
  .catch((err) => err);
