import './app.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';
import Header from '../header/header';
import Main from '../main/main'
import Footer from '../footer/footer';
import Movies from '../movies/movies';
import SavedMovies from '../saved-movies/saved-movies';

function App() {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleOpenMenu = () => {
    return setMenuOpened(!menuOpened)
  };

  return (
    <div className="page">
      <div className={`page__overlay ${menuOpened ? 'page__overlay_active' : ''}`}></div>
      <div className="page__container">
        <Header menuOpened={menuOpened} onMenuToggle={toggleOpenMenu} />
        <Routes>
          <Route path={AppRoutes.Main} element={<Main />} />
          <Route path={AppRoutes.Movies} element={<Movies />} />
          <Route path={AppRoutes.SavedMovies} element={<SavedMovies />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
