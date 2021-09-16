import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
    const { link, name, likes } = props.card;

    const currentUser = React.useContext(CurrentUserContext);

    const handleClick = () => {
        props.onCardClick(props.card);
    }

    const handleLike = () => {
        props.onCardLike(props.card);
    }

    const handleDelete = () => {
        props.onCardDelete(props.card);
    }

    const isOwn = props.card.owner._id == currentUser._id;

    const cardDeleteButtonClassName = (
        `element__trash ${isOwn ? 'element__trash_visible' : ''}`
      ); 

    const isLiked = props.card.likes.some(i => i._id === currentUser._id);

    const cardLikeButtonClassName = (
        `element__like ${isLiked ? 'element__like_active' : ''}`
    );
    
    return (
        <div id="element">
            <div className="element">
                <div className="element__description">
                    <div className="element__image" style={{ backgroundImage: `url(${link})` }} onClick={handleClick}  />
                    <button type="button" className={cardDeleteButtonClassName} onClick={handleDelete}></button>
                    <h2 className="element__text">{name}</h2>
                    <div className="element__container">
                        <button type="button" className={cardLikeButtonClassName} onClick={handleLike}></button>
                        <p className="element__count">{likes.length}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Card;
