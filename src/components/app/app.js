import './app.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';
import { useLocation } from 'react-router-dom';
import Header from '../header/header';
import Main from '../main/main'
import Footer from '../footer/footer';
import Movies from '../movies/movies';
import SavedMovies from '../saved-movies/saved-movies';
import Profile from '../profile/profile';
import SignUp from '../sign-up/sign-up';
import SignIn from '../sign-in/sign-in';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import NotFound from '../not-found/not-found';

function App() {
  const location = useLocation();

  const [menuOpened, setMenuOpened] = useState(false);

  const toggleOpenMenu = () => {
    return setMenuOpened(!menuOpened)
  };

  const closeMenu = () => setMenuOpened(false);

  return (
    <div className='page'>
      <div className={`page__overlay ${menuOpened ? 'page__overlay_active' : ''}`}></div>
      <div className='page__container'>
        <ScrollToTop />
        {(location.pathname === AppRoutes.Main ||
          location.pathname === AppRoutes.Movies ||
          location.pathname === AppRoutes.SavedMovies ||
          location.pathname === AppRoutes.Profile) &&
          <Header menuOpened={menuOpened} onMenuToggle={toggleOpenMenu} closeMenu={closeMenu} />
        }
        <Routes>
          <Route path={AppRoutes.Main} element={<Main />} />
          <Route path={AppRoutes.Movies} element={<Movies />} />
          <Route path={AppRoutes.SavedMovies} element={<SavedMovies />} />
          <Route path={AppRoutes.Profile} element={<Profile />} />
          <Route path={AppRoutes.SignUp} element={<SignUp />} />
          <Route path={AppRoutes.SignIn} element={<SignIn />} />
          <Route path={AppRoutes.NotFound} element={<NotFound />} />
        </Routes>
        {(location.pathname === AppRoutes.Main ||
          location.pathname === AppRoutes.Movies ||
          location.pathname === AppRoutes.SavedMovies) &&
          <Footer />
        }
      </div>
    </div>
  );
}

export default App;
