import { BASE_URL as MOVIES_BASE_URL } from './MoviesApi';

export const BASE_URL = 'https://api.tokarenko.nomoredomains.monster';

export const getUserInfo = () => fetch(`${BASE_URL}/users/me`, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  method: 'GET',
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Ошибка: ${response.status}`);
  })
  .catch((err) => {
    console.log(err);
  });

export const editUserInfo = (data) => fetch(`${BASE_URL}/users/me`, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  method: 'PATCH',
  body: JSON.stringify({
    name: data.name,
    email: data.email,
  }),
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Ошибка: ${response.status}`);
  })
  .catch((err) => {
    console.log(err);
  });

export const getSavedMovies = () => fetch(`${BASE_URL}/movies`, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  method: 'GET',
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Ошибка: ${response.status}`);
  })
  .catch((err) => {
    console.log(err);
  });

export const addNewMovie = (data) => fetch(`${BASE_URL}/movies`, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  method: 'POST',
  body: JSON.stringify({
    nameRU: data.nameRU,
    nameEN: data.nameEN,
    country: data.country,
    director: data.director,
    duration: data.duration,
    year: data.year,
    description: data.description,
    image: MOVIES_BASE_URL + data.image.url,
    trailerLink: data.trailerLink,
    thumbnail: MOVIES_BASE_URL + data.image.formats.thumbnail.url,
    movieId: data.id,
  }),
}).then((response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error(`Ошибка: ${response.status}`);
})
  .catch((err) => {
    console.log(err);
  });

export const deleteMovie = (movieId) => fetch(`${BASE_URL}/movies/${movieId}`, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  method: 'DELETE',
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Ошибка: ${response.status}`);
  })
  .catch((err) => {
    console.log(err);
  });

export const register = (name, email, password) => fetch(`${BASE_URL}/signup`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name, email, password }),
})
  .then((res) => {
    if (res.status === 200 || res.status === 201) {
      return res.json();
    }
    throw new Error(`Ошибка: ${res.status}`);
  })
  .then((data) => data)
  .catch((err) => err);

export const authorize = (email, password) => fetch(`${BASE_URL}/signin`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email, password }),
})
  .then((res) => {
    if (res.status === 200) {
      return res.json();
    }
    throw new Error(`Ошибка: ${res.status}`);
  })
  .then((data) => {
    localStorage.setItem('token', data.token);
    return data;
  })
  .catch((err) => err);

export const tokenCheck = (token) => fetch(`${BASE_URL}/users/me`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${token}`,
  },
})
  .then((res) => {
    if (res.status === 200) {
      return res.json();
    }
    throw new Error(`Ошибка: ${res.status}`);
  })
  .then((data) => data)
  .catch((err) => err);
