import './popup.css';
import React, { useCallback, useEffect } from 'react';

function Popup({
  message, isOpen, onClose,
}) {
  const handleOverlayClose = (e) => {
    if (e.target.classList.contains('popup')) {
      onClose();
    }
  };

  const escFunction = useCallback((event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, []);

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`} onClick={handleOverlayClose}>
      <div className='popup__container'>
        <div className='popup__icon popup__icon_type_failure'></div>
        <p className='popup__message'>
          {message}
        </p>
        <button className='popup__close-button' type='button' onClick={onClose}></button>
      </div>
    </div>
  );
}

export default Popup;
