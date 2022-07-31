import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";
import navbarReduser from "./navbar-reduser";

let store = {
  _state: {
    profile: {
      postsArr: [
        { message: 'Helo mine world!', count: 15, id: 1 },
        { message: 'Mi first post', count: 20, id: 2 },
        { message: 'Mi last post', count: 25, id: 3 }
      ],
      newPostText: ''
    },
    dialogs: {
      usersArr: [
        { name: 'Tima', id: 1 },
        { name: 'Tania', id: 2 },
        { name: 'Sofia', id: 3 },
        { name: 'Maria', id: 4 },
        { name: 'Galia', id: 5 }
      ],

      dilogsArr: [
        { message: 'Helo', id: 1 },
        { message: 'How is yuor it-kamasutra', id: 2 },
        { message: 'Bay mi frend', id: 3 },
      ],

      newDialogsText: ''
    },
    navbar: {
      frends: [
        { name: 'Tania' },
        { name: 'Sonia' },
        { name: 'Maria' },
      ],
    },
  },
  _getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log(8);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profile = profileReduser(this._state.profile, action);
    this._state.dialogs = dialogsReduser(this._state.dialogs, action);
    

    this._callSubscriber(this._state);
  }

};




export default store;