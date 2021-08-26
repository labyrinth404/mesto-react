import React from 'react';
import buttonClose from '../images/close-button.svg';

function ImagePopup(props){
  return (
    <section className="popup popup-image">
        <div className="popup-image__container">
            <button type="button" className="popup__button-close popup-image__button-close" onClick={props.onClose}>
                <img src={buttonClose} alt="Закрыть" />
            </button>
            <img src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg" className="popup-image__image" alt="Картинка элемента" />
            <h2 className="popup-image__title">Иваново</h2>
        </div>
    </section>
  );
}

export default ImagePopup;