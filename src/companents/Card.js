import React from 'react';

class Card extends React.Component {
    constructor (props) {
        super(props);
        this._text = props.name;
        this._image = props.link;
        this._likes = props.likes;
        this._id = props.id;
        //this._owner = props.owner._id;
        this._myId = props.userId;
        this._cardSelector = props.cardSelector;
        this._handleCardClick = props.handleCardClick;
        this._handleCardLike = props.handleCardLike;
        this._handleCardTrash = props.handleCardTrash;
        /*this._element = document.querySelector('.element');
        this._imageSelector = this._element.querySelector('.element__image');
        this._textSelector = this._element.querySelector('.element__text');
        this._likeSelector = this._element.querySelector('.element__like');
        this._countSelector = this._element.querySelector('.element__count');
        this._trashSelector = this._element.querySelector('.element__trash');*/
    }


    generateCard() {
        this._setEventListener();
        this._element.id = this._owner
 
        this._imageSelector.src = this._image;
        this._imageSelector.alt = `Фото(${this._text})`;
        this._textSelector.textContent = this._text;
        //this._imageSelector.id = this._id;
        this._countSelector.textContent = this._likes.length;
        if(this.checkLike()) {
            this._likeSelector.classList.add('element__like_active');
        }
        

        return this._element
    }

    _setEventListener() {
        
        this._hideTrashButton();

        this._imageSelector.addEventListener('click', () => { this.handleClick() });
        this._likeSelector.addEventListener('click', () => { this._handleCardLike(this) });
        this._trashSelector.addEventListener('click', () => {this._handleCardTrash(this) });
      
    }

    handleClick(){
        console.log('hah')
      this.props.onCardClick(this.props.card);
    }
    /*
    checkLike() {
        return Boolean(this._likes.find(like => like._id === this._myId) !== undefined);
    }*/

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


    render() {
        return (
            <div id="element">
                <div className="element">
                    <div className="element__description">
                        <div className="element__image" style={{ backgroundImage: `url(${this.props.link})` }}   />
                        <button type="button" className="element__trash"></button>
                        <h2 className="element__text">{this.props.name}</h2>
                        <div className="element__container">
                            <button type="button" className="element__like"></button>
                            <p className="element__count">{this.props.likes}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Card;
