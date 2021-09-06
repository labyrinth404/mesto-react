import React, { useEffect, useState } from 'react';
import updateButton from '../images/update.svg';
import editButton from '../images/edit-button.svg';
import addButton from '../images/add-button.svg';
import { api } from '../utils/Api';
import Card from '../companents/Card';
 
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


 

    componentDidMount() {

        document.querySelector('.profile__update').addEventListener('click', this.props.onEditAvatar);
        document.querySelector('.profile__button-edit').addEventListener('click', this.props.onEditProfile);
        document.querySelector('.profile__button-add').addEventListener('click', this.props.onAddPlace);
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
                        <Card name={card.name}
                              link={card.link}
                              likes={card.likes.length} />
                    ))}
                </section>
            </main>
        );
    }
}

export default Main;