import './loading-page.css';
import React from 'react';
import Preloader from '../preloader/preloader.jsx';

function LoadingPage() {
  return (
    <div className='loading-page'>
      <h1 className='loading-page__title'>Loading...</h1>
      <Preloader />
    </div>
  );
}

export default LoadingPage;
