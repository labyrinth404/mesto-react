import React from 'react';
import buttonClose from '../images/close-button.svg';

function ImagePopup(props){
  const { link, name } = props.card

  return (
    <section className={`popup popup-image ${props.isOpen}`}>
        <div className="popup-image__container">
            <button type="button" className="popup__button-close popup-image__button-close" onClick={props.onClose}>
                <img src={buttonClose} alt="Закрыть" />
            </button>
            <img src={link} className="popup-image__image" alt={`Картинка: ${name}`} />
            <h2 className="popup-image__title">{name}</h2>
        </div>
    </section>
  );
}

export default ImagePopup;