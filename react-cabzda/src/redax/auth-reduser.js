import { stopSubmit } from 'redux-form';
import { authApi, securytiApi } from '../api/api';

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';
const SET_CAPTCHA_URL  = 'auth/SET_CAPTCHA_URL';

export const getLogine = () => async (dispatch) => {
  let data = await authApi.headersApi();
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
}

export const login = (email, password, rememberMe, captcha = '') => async (dispatch) => {
  let data = await authApi.login(email, password, rememberMe, captcha);
  if (data.resultCode === 0) {
    dispatch(getLogine());
    dispatch(setCaptchaUrl(''));
  } else {
    if(data.resultCode === 10){
      dispatch(getCaptchaUrl());
    }
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

export const getCaptchaUrl = () => async (dispatch) => {
  let data = await securytiApi.getCaptchaApi();
 const captchaUrl = data.url;
    dispatch(setCaptchaUrl(captchaUrl));
  
}

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: ''
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
      };

      case SET_CAPTCHA_URL:
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

export const setCaptchaUrl = (captchaUrl) => (
  { type: SET_CAPTCHA_URL, data: { captchaUrl } }
);

export default authReduser;