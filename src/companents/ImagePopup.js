import React from 'react';
import buttonClose from '../images/close-button.svg';

function ImagePopup(props){
  return (
    <section className="popup popup-image">
        <div className="popup-image__container">
            <button type="button" className="popup__button-close popup-image__button-close" onClick={props.onClose}>
                <img src={buttonClose} alt="Закрыть" />
            </button>
            <img src={props.url} className="popup-image__image" alt="Картинка элемента" />
            <h2 className="popup-image__title">{props.name}</h2>
        </div>
    </section>
  );
}

export default ImagePopup;