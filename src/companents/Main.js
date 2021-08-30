import React, { useEffect, useState } from 'react';
import updateButton from '../images/update.svg';
import Card from './Card';
import editButton from '../images/edit-button.svg';
import addButton from '../images/add-button.svg';
import { api } from '../utils/Api';

 
class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userDescription: '',
            userAvatar: '',
            cards: [],
        }
    }
    handleClick = () => {
        const card = new Card();
        this.card = card;
        this.props.onCardClick(this.card);
        console.log(this.card)
    }

    handleEditAvatarClick = () => {
        document.querySelector('.popup_type_avatar').classList.add('popup_opened');
    };

    handleEditProfileClick = () => {
        document.querySelector('.popup_type_confirm').classList.add('popup_opened');
    };

    handleAddPlaceClick = () => {
        document.querySelector('.popup_type_add-card').classList.add('popup_opened');
    };

    componentDidMount() {
        

        document.querySelector('.profile__update').addEventListener('click', this.handleEditAvatarClick)
        document.querySelector('.profile__button-edit').addEventListener('click', this.handleEditProfileClick)
        document.querySelector('.profile__button-add').addEventListener('click', this.handleAddPlaceClick)
        api.getUserInfo()
        .then((userData) => {
            this.setState({
                userName: userData.name,
                userDescription: userData.about,
                userAvatar: userData.avatar,
            })
        })
        .catch(error => console.log(error));

        api.getInitialCards()
            .then((cardsData) => {
                this.setState({
                    cards: cardsData
                });
            }) 
            .catch(error => console.log(error));
      }

    render(){


           
        return (
            <main className="main">
                <section className="profile">
                    <img src={updateButton} className="profile__update" />
                    <div className="profile__avatar"  style={{ backgroundImage: `url(${this.state.userAvatar})` }} />
                    <div className="profile__info">
                        <h1 className="profile__name">{this.state.userName}</h1>
                        <button type="button" className="profile__button-edit"> 
                            <img src={editButton} alt="Редактировать" />
                        </button>
                        <p className="profile__description">{this.state.userDescription}</p>
                    </div>
                    <button type="button" className="profile__button-add">
                        <img src={addButton} alt="Добавить" />
                    </button>
                </section>
                <section className="elements">
                    {this.state.cards.map(card => ( 
                    <div id="element">
                        <div className="element">
                            <div className="element__description">
                                <div className="element__image" style={{ backgroundImage: `url(${card.link})` }}   />
                                <button type="button" className="element__trash"></button>
                                <h2 className="element__text">{card.name}</h2>
                                <div className="element__container">
                                    <button type="button" className="element__like"></button>
                                    <p className="element__count">{card.likes.length}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </section>
            </main>
        );
    }
}

export default Main;