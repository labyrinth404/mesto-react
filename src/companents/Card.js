import React from 'react';

class Card extends React.Component {
    constructor (props, { handleCardClick, handleCardLike, handleCardTrash, }, cardData, cardSelector) {
        super(props);
        this._text = cardData.name;
        this._image = cardData.link;
        this._likes = cardData.likes;
        this._id = cardData.id;
        this._owner = cardData.owner._id;
        this._myId = cardData.userId;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleCardLike = handleCardLike;
        this._handleCardTrash = handleCardTrash;
        this._element = this._getTemplate();
        this._imageSelector = this._element.querySelector('.element__image');
        this._textSelector = this._element.querySelector('.element__text');
        this._likeSelector = this._element.querySelector('.element__like');
        this._countSelector = this._element.querySelector('.element__count');
        this._trashSelector = this._element.querySelector('.element__trash');
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
        
        return cardElement
    }

    generateCard() {
        this._setEventListener();
        this._element.id = this._owner
 
        this._imageSelector.src = this._image;
        this._imageSelector.alt = `Фото(${this._text})`;
        this._textSelector.textContent = this._text;
        this._imageSelector.id = this._id;
        this._countSelector.textContent = this._likes.length;
        if(this.checkLike()) {
            this._likeSelector.classList.add('element__like_active');
        }
        

        return this._element
    }

    _setEventListener() {
        
        this._hideTrashButton();

        this._imageSelector.addEventListener('click', () => { this._handleCardClick(this) });
        this._likeSelector.addEventListener('click', () => { this._handleCardLike(this) });
        this._trashSelector.addEventListener('click', () => {this._handleCardTrash(this) });
      
    }

    handleClick(){
      this.props.onCardClick(this.props.card);
    }

    checkLike() {
        return Boolean(this._likes.find(like => like._id === this._myId) !== undefined);
    }

    deactiveLike(){
    }

    changeLike(data) {
        this._countSelector.textContent = data.likes.length;
        if(this.checkLike()){
            this._likeSelector.classList.remove('element__like_active'); 
        } else {
            this._likeSelector.classList.add('element__like_active');
        }                 
        this._likes = data.likes;

    }

    deleteTrashClick() {
        this._element.remove();
        this._element = null;
    }
    
    _hideTrashButton(){
        if(this._owner !== this._myId){
            this._trashSelector.style.visibility = "hidden"
        }  
    }
}


export default Card;
