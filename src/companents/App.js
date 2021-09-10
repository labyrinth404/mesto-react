
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


  const [selectedCard, setSelectedCard ] = useState('');
  
  const closeAllPopups = () => {
    //TODO: сделать
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard('');
  };

  const handleCardClick = (e) => {
    setSelectedCard(e);
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

      <PopupWithForm   onClose={closeAllPopups} title="Обновить аватар" isOpen={`${isEditAvatarPopupOpen ? ' popup_opened' : ''}`} name={'avatar'} children={
        <form name="popupEditInformation" method="post" className="popup__form" novalidate>
          <input required type="url" placeholder="Ссылка на картинку" className="popup__input" id="mestoUrlAvatar" name="mesto-url-form" />
          <span className="popup-error" id="mestoUrlAvatar-error"></span>
          <button type="submit" className="popup__button-save">Сохранить</button>
        </form>
      }/>
      <PopupWithForm title="Вы уверены?"  onClose={closeAllPopups}  children={
        <form name="popupDeleteConfirmation" method="post" className="popup__form" novalidate>
          <button type="submit" className="popup__button-save">Да</button>
        </form>
      }/>
      <PopupWithForm onClose={closeAllPopups} title="Редактировать профиль"  isOpen={`${isEditProfilePopupOpen ? ' popup_opened' : ''}`} name={'profile'} children={
        <form name="popupEditInformation" method="post" className="popup__form" novalidate>
          <input required type="text" value="" className="popup__input" id="popupName" name="popup-name-form" minlength="2" maxlength="40" autocomplete="off" />
          <span className="popup-error" id="popupName-error"></span>
          <input required type="text" value="" className="popup__input" id="popupDescription" name="popup-description-form" minlength="2" maxlength="200" autocomplete="off" />
          <span className="popup-error" id="popupDescription-error"></span>
          <button type="submit" className="popup__button-save">Сохранить</button>
        </form>
      }/>
      <PopupWithForm onClose={closeAllPopups} title="Новое место" isOpen={`${isAddPlacePopupOpen ? ' popup_opened' : ''}`} name={'add-card'} children={
        <form name="popupEditInformation" method="post" className="popup__form" novalidate>
          <input required type="text" placeholder="Название" className="popup__input" id="mestoName" name="mesto-name-form" minlength="2" maxlength="30" autocomplete="off" />
          <span className="popup-error" id="mestoName-error"></span>
          <input required type="url" placeholder="Ссылка на картинку" className="popup__input" id="mestoUrl" name="mesto-url-form" />
          <span className="popup-error" id="mestoUrl-error"></span>
          <button type="submit" className="popup__button-save">Сохранить</button>
        </form>
      }/>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={`${selectedCard ? ' popup_opened' : ''}`}/>
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
