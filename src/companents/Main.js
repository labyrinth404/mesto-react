import React from 'react';
import updateButton from '../images/update.svg';
import avatar from '../images/avatar_kusto.jpg';
import editButton from '../images/edit-button.svg';
import addButton from '../images/add-button.svg'


class Main extends React.Component{
    constructor(props) {
        super(props);
    }

    handleEditAvatarClick = () => {
        document.querySelector('.popup_type_avatar').classList.add('popup_opened');
    };

    handleEditProfileClick = () => {
        this.props = true;
    };

    handleAddPlaceClick = () => {
        document.querySelector('.popup_type_add-card').classList.add('popup_opened');
    };

    componentDidMount() {
        document.querySelector('.profile__update').addEventListener('click', this.handleEditAvatarClick)
        document.querySelector('.profile__button-edit').addEventListener('click', this.handleEditProfileClick)
        document.querySelector('.profile__button-add').addEventListener('click', this.handleAddPlaceClick)
      }

    render(){
        return (
            <main className="main">
                <section className="profile">
                    <img src={updateButton} className="profile__update" />
                    <img src={avatar} className="profile__avatar" alt="Аватарка" />
                    <div className="profile__info">
                        <h1 className="profile__name"></h1>
                        <button type="button" className="profile__button-edit"> 
                            <img src={editButton} alt="Редактировать" />
                        </button>
                        <p className="profile__description"></p>
                    </div>
                    <button type="button" className="profile__button-add">
                        <img src={addButton} alt="Добавить" />
                    </button>
                </section>
                <section className="elements">

                    <template id="element">
                        <div className="element">
                            <div className="element__description">
                                <img src="https://127.0.0.1" className="element__image" alt="Картинка элемента" />
                                <button type="button" className="element__trash"></button>
                                <h2 className="element__text">текст</h2>
                                <div className="element__container">
                                    <button type="button" className="element__like"></button>
                                    <p className="element__count"></p>
                                </div>
                            </div>
                        </div>
                    </template>
                </section>
            </main>
        );
    }
}

export default Main;