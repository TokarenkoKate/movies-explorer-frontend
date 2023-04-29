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

function App() {
  const location = useLocation();

  const [menuOpened, setMenuOpened] = useState(false);

  const toggleOpenMenu = () => {
    return setMenuOpened(!menuOpened)
  };

  return (
    <div className='page'>
      <div className={`page__overlay ${menuOpened ? 'page__overlay_active' : ''}`}></div>
      <div className='page__container'>
        <Header menuOpened={menuOpened} onMenuToggle={toggleOpenMenu} />
        <Routes>
          <Route path={AppRoutes.Main} element={<Main />} />
          <Route path={AppRoutes.Movies} element={<Movies />} />
          <Route path={AppRoutes.SavedMovies} element={<SavedMovies />} />
          <Route path={AppRoutes.Profile} element={<Profile />} />
        </Routes>
        {location.pathname !== AppRoutes.Profile && <Footer />}
      </div>
    </div>
  );
}

export default App;
