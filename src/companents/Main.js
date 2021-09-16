import React, { useEffect, useState } from 'react';
import updateButton from '../images/update.svg';
import editButton from '../images/edit-button.svg';
import addButton from '../images/add-button.svg';
import { api } from '../utils/Api';
import Card from '../companents/Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
 
function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);



    

    return (
        <main className="main">
            <section className="profile">
                <img src={updateButton} className="profile__update" onClick={props.onEditAvatar}/>
                <div className="profile__avatar"  style={{ backgroundImage: `url(${currentUser.avatar})` }} />
                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button type="button" className="profile__button-edit" onClick={props.onEditProfile}> 
                        <img src={editButton} alt="Редактировать" />
                    </button>
                    <p className="profile__description">{currentUser.about}</p>
                </div>
                <button type="button" className="profile__button-add" onClick={props.onAddPlace}>
                    <img src={addButton} alt="Добавить" />
                </button>
            </section>
            <section className="elements">
                {props.cards.map(card => ( 
                    <Card   key={card._id} 
                        card={card}
                        onCardClick={props.onCardClick}
                        onCardLike={props.onCardLike}
                        onCardDelete={props.onCardDelete}
                    />
                ))}
            </section>
        </main>
    );
}


export default Main;