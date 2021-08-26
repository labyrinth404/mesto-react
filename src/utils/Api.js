class Api {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    }

    _checkResponse(res){
        if(res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }
  
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers
          })
            .then(this._checkResponse);
    }

    postCard(name, link){
        this._name = name;
        this._link = link;
        this._headers['Content-Type'] = 'application/json';
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                "name": this._name,
                "link": this._link
                })
            })
            .then(this._checkResponse);
    }

    deleteCard(cardId){
        this._cardId = cardId;
        return fetch(`${this._url}/cards/${this._cardId}`, {
            method: 'DELETE',
            headers: this._headers
            })
            .then(this._checkResponse);

    }

    getUserInfo(){
        return fetch(`${this._url}/users/me `, {
            headers: this._headers
            })
            .then(this._checkResponse);
    }

    patchUserInfo(name, about){
        this._name = name;
        this._about = about;
        this._headers['Content-Type'] = 'application/json';
        return fetch(`${this._url}/users/me `, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: this._name,
                about: this._about
            })
        })
        .then(this._checkResponse);
    }

    patchUserAvatar(avatar){
        this._avatar = avatar;
        this._headers['Content-Type'] = 'application/json';
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: this._avatar
            })
        })
        .then(this._checkResponse);
    }

    changeLikeCard(cardId, like){
        this._cardId = cardId;
        return fetch(`${this._url}/cards/likes/${this._cardId}`, {
            method: like ? 'DELETE' : 'PUT',
            headers: this._headers
        })
        .then(this._checkResponse);
    }
}

export const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-26',
    headers: { authorization: '379cd553-b5f6-46c7-ade6-e4556a60f89b' }
  });

 