
import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

import { api } from '../utils/Api';



function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  const [selectedCard, setSelectedCard ] = useState({});

  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    api.getUserInfo()
    .then((userData) => {
      setCurrentUser(userData);
    })
    .catch(error => console.log(error))
}, [])
  

    
  useEffect(() => {
      api.getInitialCards()
          .then((cardsData) => {
              setCards(cardsData);
          }) 
          .catch(error => console.log(error));
  }, [])

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCard(card._id, isLiked)
        .then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch(error => console.log(error));
  };

  const handleCardDelete = (card) => {
    api.deleteCard(card._id)
        .then(() => {
            setCards(cards.filter(item => item._id !== card._id));
        })
        .catch(error => console.log(error));
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

  const handleUpdateUser  = ({ name, about }) => {
    api.patchUserInfo(name, about)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch(error => console.log(error));
  };

  const handleUpdateAvatar = (e) => {
    api.patchUserAvatar(e.avatar.value)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch(error => console.log(error));
  };

  const handleAddPlaceSubmit = (name, link) => {
    
    api.postCard(name, link)
      .then(newCard => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(error => console.log(error));
  };



  return (
    <CurrentUserContext.Provider value={currentUser}>

      <Header />

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} 
                       onClose={closeAllPopups}
                       onUpdateAvatar={handleUpdateAvatar}  
                       />

      <PopupWithForm title="Вы уверены?"  onClose={closeAllPopups} name={'confirm'} />

      <EditProfilePopup isOpen={isEditProfilePopupOpen} 
                        onClose={closeAllPopups}
                        onUpdateUser={handleUpdateUser}
      />


      <AddPlacePopup isOpen={isAddPlacePopupOpen}
                     onClose={closeAllPopups}
                     onAddPlace={handleAddPlaceSubmit}
      />

      <ImagePopup card={selectedCard} 
                  onClose={closeAllPopups} 
                  isOpen={`${selectedCard._id !== undefined ? ' popup_opened' : ''}`}            
      />

      <Main card={selectedCard}
            cards={cards}
            onCardClick={handleCardClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
      />
      
      <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;
