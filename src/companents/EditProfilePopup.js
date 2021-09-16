import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  function handleName(e) {
    setName(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    props.onUpdateUser({
      name,
      about: description,
    });
  } 

  return (
    <PopupWithForm onClose={props.onClose} 
                   title="Редактировать профиль" 
                   isOpen={`${props.isOpen ? 'popup_opened' : ''}`}
                   onSubmit={handleSubmit}
                   name={'profile'} 
                   children={
                              <>
                                <input required 
                                      type="text" 
                                      value={name} 
                                      className="popup__input" 
                                      id="popupName" 
                                      name="popup-name-form" 
                                      minLength="2" 
                                      maxLength="40" 
                                      autoComplete="off" 
                                      onChange={handleName}/>
                                <span className="popup-error" 
                                      id="popupName-error"></span>

                                <input required type="text" 
                                      value={description} 
                                      className="popup__input" 
                                      id="popupDescription" 
                                      name="popup-description-form" 
                                      minLength="2" 
                                      maxLength="200" 
                                      autoComplete="off" 
                                      onChange={handleDescription}/>
                                <span className="popup-error" 
                                      id="popupDescription-error"></span>
                              </>
    }/>
  )
}

export default EditProfilePopup;