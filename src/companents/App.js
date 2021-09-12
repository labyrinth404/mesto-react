
import React, { useState } from 'react';
import Header from './Header.js';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Main from './Main';
import Footer from './Footer';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen ] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ] = useState(false);

  const [selectedCard, setSelectedCard ] = useState({});
  
  const closeAllPopups = () => {
    //TODO: сделать
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleEditAvatarClick = () => {
      setIsEditAvatarPopupOpen(true);
  }
  
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };



  return (
    <>
      <Header />

      <PopupWithForm   onClose={closeAllPopups} title="Обновить аватар" isOpen={`${isEditAvatarPopupOpen ? 'popup_opened' : ''}`} name={'avatar'} children={
        <>
          <input required type="url" placeholder="Ссылка на картинку" className="popup__input" id="mestoUrlAvatar" name="mesto-url-form" />
          <span className="popup-error" id="mestoUrlAvatar-error"></span>
        </>

      }/>
      <PopupWithForm title="Вы уверены?"  onClose={closeAllPopups} name={'confirm'} />
      <PopupWithForm onClose={closeAllPopups} title="Редактировать профиль" isOpen={`${isEditProfilePopupOpen ? 'popup_opened' : ''}`} name={'profile'} children={
        <>
          <input required type="text" placeholder="Имя" className="popup__input" id="popupName" name="popup-name-form" minLength="2" maxLength="40" autoComplete="off" />
          <span className="popup-error" id="popupName-error"></span>
          <input required type="text" placeholder="Описание" className="popup__input" id="popupDescription" name="popup-description-form" minLength="2" maxLength="200" autoComplete="off" />
          <span className="popup-error" id="popupDescription-error"></span>
         </>
      }/>
      <PopupWithForm onClose={closeAllPopups} title="Новое место" isOpen={`${isAddPlacePopupOpen ? 'popup_opened' : ''}`} name={'add-card'} children={
        <>
          <input required type="text" placeholder="Название" className="popup__input" id="mestoName" name="mesto-name-form" minLength="2" maxLength="30" autoComplete="off" />
          <span className="popup-error" id="mestoName-error"></span>
          <input required type="url" placeholder="Ссылка на картинку" className="popup__input" id="mestoUrl" name="mesto-url-form" />
          <span className="popup-error" id="mestoUrl-error"></span>
        </>
      }/>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={`${selectedCard._id !== undefined ? ' popup_opened' : ''}`}/>
      <Main card={selectedCard}
            onCardClick={handleCardClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}/>
      
      <Footer />
    </>
  );
}

export default App;
