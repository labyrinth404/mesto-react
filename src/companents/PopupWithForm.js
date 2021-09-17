import React from 'react';
import buttonClose from '../images/close-button.svg';

function PopupWithForm(props){
  
  return (
      <section className={`popup popup_type_${props.name} ${props.isOpen}`}>
        <div className={`popup__container popup__container_${props.name}`}>
            <button type="button" className={`popup__button-close popup__button-close_${props.name}`} onClick={props.onClose}>
                <img src={buttonClose} alt="Закрыть" />
            </button>
            <h2 className="popup__title">{props.title}</h2>
            <form method="post" className="popup__form" onSubmit={props.onSubmit}>
              {props.children}
              <button type="submit" className="popup__button-save">{props.name === 'confirm' ? 'Да' : 'Сохранить'}</button>
            </form>
         </div>
      </section>
  );
}

export default PopupWithForm