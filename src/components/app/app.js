import './app.css';
import React, { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../header/header.jsx';
import Main from '../main/main.jsx';
import Footer from '../footer/footer.jsx';
import Movies from '../movies/movies.jsx';
import SavedMovies from '../saved-movies/saved-movies.jsx';
import Profile from '../profile/profile.jsx';
import SignUp from '../sign-up/sign-up.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import ScrollToTop from '../scroll-to-top/scroll-to-top.jsx';
import NotFound from '../not-found/not-found.jsx';
import ProtectedRoute from '../protected-route/protected-route.jsx';
import {
  getUserInfo, getSavedMovies, tokenCheck, addNewMovie, deleteMovie,
} from '../../services/MainApi';
import LoadingPage from '../loading-page/loading-page.jsx';
import Popup from '../popup/popup.jsx';

function App() {
  const location = useLocation();

  const [menuOpened, setMenuOpened] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  const toggleOpenMenu = () => setMenuOpened(!menuOpened);
  const closeMenu = () => setMenuOpened(false);
  const closePopup = () => setIsPopupOpened(false);

  const handleAddNewMovie = (newMovie) => addNewMovie(newMovie).then((movie) => {
    setSavedMovies((oldSavedMovies) => [...oldSavedMovies, movie]);
    return movie;
  }).catch(() => setIsPopupOpened(true));

  const handleMovieDelete = (id) => deleteMovie(id).then(() => {
    setSavedMovies((oldSavedMovies) => oldSavedMovies.filter(
      (currentMovie) => currentMovie._id !== id,
    ));
  }).catch(() => setIsPopupOpened(true));

  const handleTokenCheck = () => {
    const token = localStorage.getItem('token');
    if (token) {
      tokenCheck(token)
        .then((data) => {
          if (data && !(data instanceof Error)) {
            setIsLoggedIn(true);
            setCurrentUser({ name: data.name, email: data.email });
            setIsLoaded(true);
          } else {
            setIsLoaded(true);
            setIsPopupOpened(true);
          }
        });
    } else {
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([getUserInfo(), getSavedMovies()])
        .then(([user, previousSavedMovies]) => {
          setCurrentUser(user);
          setSavedMovies(previousSavedMovies);
        })
        .catch(() => setIsPopupOpened(true));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    handleTokenCheck();
  }, []);

  return isLoaded ? (<CurrentUserContext.Provider value={currentUser}>
        <div className='page'>
          <div className={`page__overlay ${menuOpened ? 'page__overlay_active' : ''}`}></div>
          <div className='page__container'>
            <ScrollToTop />
            {(location.pathname === AppRoutes.Main
              || location.pathname === AppRoutes.Movies
              || location.pathname === AppRoutes.SavedMovies
              || location.pathname === AppRoutes.Profile)
              && (
                <Header
                  menuOpened={menuOpened}
                  onMenuToggle={toggleOpenMenu}
                  closeMenu={closeMenu}
                  isLoggedIn={isLoggedIn}
                />)
            }
            <Routes>
              <Route path={AppRoutes.Main} element={<Main isLoggedIn={isLoggedIn} />} />
              <Route path={AppRoutes.Movies}
                element={
                  <ProtectedRoute
                    isLoggedIn={isLoggedIn}
                    onClickSaveMovie={handleAddNewMovie}
                    onClickDeleteMovie={handleMovieDelete}
                    savedMovies={savedMovies}
                    setIsPopupOpened={setIsPopupOpened}
                    element={Movies}
                  />}
              />
              <Route path={AppRoutes.SavedMovies}
                element={
                  <ProtectedRoute
                    isLoggedIn={isLoggedIn}
                    savedMovies={savedMovies}
                    onClickDeleteMovie={handleMovieDelete}
                    element={SavedMovies}
                  />
                } />
              <Route path={AppRoutes.Profile} element={
                <ProtectedRoute
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  setCurrentUser={setCurrentUser}
                  element={Profile} />}
                />
              <Route path={AppRoutes.SignUp} element={<SignUp onSignIn={setIsLoggedIn} />} />
              <Route path={AppRoutes.SignIn} element={<SignIn onSignIn={setIsLoggedIn} />} />
              <Route path={AppRoutes.NotFound} element={<NotFound />} />
            </Routes>
            {(location.pathname === AppRoutes.Main
              || location.pathname === AppRoutes.Movies
              || location.pathname === AppRoutes.SavedMovies)
              && <Footer />
            }
            <Popup
              message={'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'}
              isOpen={isPopupOpened}
              onClose={closePopup}
            />
          </div>
        </div>
    </CurrentUserContext.Provider>) : (<LoadingPage />);
}

export default App;
