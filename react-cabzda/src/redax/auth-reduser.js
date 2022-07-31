import { stopSubmit } from 'redux-form';
import { authApi } from '../api/api';

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';

export const getLogine = () => async (dispatch) => {
  let data = await authApi.headersApi();
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  let data = await authApi.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(getLogine());
  } else {
    let messages = data.messages.length > 0 ? data.messages[0] : 'Some error'
    dispatch(stopSubmit('login', { _error: messages }))
  }
}

export const logout = () => async (dispatch) => {
  let data = await authApi.logout();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
}

export const setAuthUserData = (userId, email, login, isAuth) => (
  { type: SET_AUTH_USER_DATA, data: { userId, email, login, isAuth } }
);

export default authReduser;