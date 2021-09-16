import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup (props) {

  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
  
    props.onUpdateAvatar({
      avatar: avatarRef.current,
    });
  } 

  return (
    <PopupWithForm onClose={props.onClose} 
                   title="Обновить аватар" 
                   isOpen={`${props.isOpen ? 'popup_opened' : ''}`} 
                   name={'avatar'} 
                   onSubmit={handleSubmit}
                   children={
      <>
        <input required type="url" ref={avatarRef} placeholder="Ссылка на картинку" className="popup__input" id="mestoUrlAvatar" name="mesto-url-form" />
        <span className="popup-error" id="mestoUrlAvatar-error"></span>
      </>

    }/>
  );
}

export default EditAvatarPopup;