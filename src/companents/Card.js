import React from 'react';

function Card(props) {
    const { link, name, likes } = props.card;

    const handleClick = () => {
      props.onCardClick(props.card);
    }
    
    return (
        <div id="element">
            <div className="element">
                <div className="element__description">
                    <div className="element__image" style={{ backgroundImage: `url(${link})` }} onClick={handleClick}  />
                    <button type="button" className="element__trash" ></button>
                    <h2 className="element__text">{name}</h2>
                    <div className="element__container">
                        <button type="button" className="element__like" ></button>
                        <p className="element__count">{likes.length}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Card;
