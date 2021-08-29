
import React from 'react';
import Header from './Header.js';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Main from './Main';
import Footer from './Footer';

 


function App() {

  const main = new Main();
  const isEditProfilePopupOpen = main.handleEditProfileClick;
  const isEditAvatarPopupOpen = main.handleEditAvatarClick;
  const isAddPlacePopupOpen = main.handleAddPlaceClick;
  let isOpen = false;
  
  const selectedCard = main.handleCardClick;
  
  const closeAllPopups = () => {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
  };

  

  return (
    <>
      <Header />

      <PopupWithForm  onEditAvatar={isEditAvatarPopupOpen} onClose={closeAllPopups} title="Обновить аватар" name={`avatar${isOpen ? ' popup_opened' : ''}`} children={
        <form name="popupEditInformation" method="post" className="popup__form" novalidate>
          <input required type="url" placeholder="Ссылка на картинку" className="popup__input" id="mestoUrlAvatar" name="mesto-url-form" />
          <span className="popup-error" id="mestoUrlAvatar-error"></span>
          <button type="submit" className="popup__button-save">Сохранить</button>
        </form>
      }/>
      <PopupWithForm title="Вы уверены?"  onClose={closeAllPopups} name={`confirm${isOpen ? ' popup_opened' : ''}`} children={
        <form name="popupDeleteConfirmation" method="post" className="popup__form" novalidate>
          <button type="submit" className="popup__button-save">Да</button>
        </form>
      }/>
      <PopupWithForm onEditProfile={isEditProfilePopupOpen} onClose={closeAllPopups} title="Редактировать профиль" name={`profile${isOpen ? ' popup_opened' : ''}`} children={
        <form name="popupEditInformation" method="post" className="popup__form" novalidate>
          <input required type="text" value="" className="popup__input" id="popupName" name="popup-name-form" minlength="2" maxlength="40" autocomplete="off" />
          <span className="popup-error" id="popupName-error"></span>
          <input required type="text" value="" className="popup__input" id="popupDescription" name="popup-description-form" minlength="2" maxlength="200" autocomplete="off" />
          <span className="popup-error" id="popupDescription-error"></span>
          <button type="submit" className="popup__button-save">Сохранить</button>
        </form>
      }/>
      <PopupWithForm onAddPlace={isAddPlacePopupOpen} onClose={closeAllPopups} title="Новое место" name={`add-card${isOpen ? ' popup_opened' : ''}`} children={
        <form name="popupEditInformation" method="post" className="popup__form" novalidate>
          <input required type="text" placeholder="Название" className="popup__input" id="mestoName" name="mesto-name-form" minlength="2" maxlength="30" autocomplete="off" />
          <span className="popup-error" id="mestoName-error"></span>
          <input required type="url" placeholder="Ссылка на картинку" className="popup__input" id="mestoUrl" name="mesto-url-form" />
          <span className="popup-error" id="mestoUrl-error"></span>
          <button type="submit" className="popup__button-save">Сохранить</button>
        </form>
      }/>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      <Main />
      
      <Footer />
    </>
  );
}

export default App;
