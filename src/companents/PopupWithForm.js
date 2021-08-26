import React from 'react';
import buttonClose from '../images/close-button.svg';

function PopupWithForm(props){
  
  return (
      <section className={`popup popup_type_${props.name}`}>
        <div className={`popup__container popup__container_${props.name}`}>
            <button type="button" className={`popup__button-close popup__button-close_${props.name}`} onClick={props.onClose}>
                <img src={buttonClose} alt="Закрыть" />
            </button>
            <h2 className="popup__title">{props.title}</h2>
            {props.children}
         </div>
      </section>
  );
}

export default PopupWithForm