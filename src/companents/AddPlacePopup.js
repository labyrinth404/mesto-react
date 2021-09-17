import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props){

  const nameRef = React.useRef();
  const linkRef = React.useRef();


  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace(nameRef.current.value, linkRef.current.value)
    nameRef.current.value = '';
    linkRef.current.value = '';
  }


  return (
    <PopupWithForm onClose={props.onClose} 
                   title="Новое место" 
                   isOpen={`${props.isOpen ? 'popup_opened' : ''} `} 
                   name={'add-card'}
                   onSubmit={handleSubmit} 
                   children={
      <>
        <input required 
               type="text" 
               placeholder="Название" 
               className="popup__input" 
               id="mestoName" 
               name="mesto-name-form" 
               minLength="2" 
               maxLength="30" 
               autoComplete="off"
               ref={nameRef}
         />
        <span className="popup-error" id="mestoName-error"></span>
        <input required 
               type="url" 
               placeholder="Ссылка на картинку" 
               className="popup__input" 
               id="mestoUrl" 
               name="mesto-url-form" 
               ref={linkRef} 
          />
        <span className="popup-error" id="mestoUrl-error"></span>
      </>
    }/>
  );
};

export default AddPlacePopup;