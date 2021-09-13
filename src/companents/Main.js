import React, { useContext, useEffect, useState } from 'react';
import updateButton from '../images/update.svg';
import editButton from '../images/edit-button.svg';
import addButton from '../images/add-button.svg';
import { api } from '../utils/Api';
import Card from '../companents/Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
 
function Main(props) {
    const userContext = useContext(CurrentUserContext);

    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        api.getInitialCards()
            .then((cardsData) => {
                setCards(cardsData);
            }) 
            .catch(error => console.log(error));
    }, [])

    return (
        <main className="main">
            <section className="profile">
                <img src={updateButton} className="profile__update" onClick={props.onEditAvatar}/>
                <div className="profile__avatar"  style={{ backgroundImage: `url(${userContext.avatar})` }} />
                <div className="profile__info">
                    <h1 className="profile__name">{userContext.name}</h1>
                    <button type="button" className="profile__button-edit" onClick={props.onEditProfile}> 
                        <img src={editButton} alt="Редактировать" />
                    </button>
                    <p className="profile__description">{userContext.about}</p>
                </div>
                <button type="button" className="profile__button-add" onClick={props.onAddPlace}>
                    <img src={addButton} alt="Добавить" />
                </button>
            </section>
            <section className="elements">
                {cards.map(card => ( 
                    <Card   key={card._id} 
                        card={card}
                        onCardClick={props.onCardClick}
                    />
                ))}
            </section>
        </main>
    );
}


export default Main;