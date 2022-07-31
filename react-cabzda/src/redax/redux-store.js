import { combineReducers, createStore, applyMiddleware } from "redux";
import profileReduser from './profile-reduser';
import dialogsReduser from './dialogs-reduser';
import navbarReduser from './navbar-reduser';
import usersReduser from './users-reduser';
import authReduser from './auth-reduser';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReduser from './app-reduser ';

let redusers = combineReducers(
    {
        profile: profileReduser,
        dialogs: dialogsReduser,
        usersPage: usersReduser,
        navbar: navbarReduser,
        auth: authReduser,
        form: formReducer,
        app: appReduser
    }
);

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;