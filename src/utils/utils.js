export function debounce(fn, ms) {
  let timer;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      // eslint-disable-next-line prefer-rest-params
      fn.apply(this, arguments);
    }, ms);
  };
}

export const filterMoviesToSearchValue = (moviesArr, searchValue) => moviesArr.filter(
  (movie) => movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()),
);

export const filterMoviesToDuration = (movies) => movies.filter((movie) => movie.duration <= 40);
