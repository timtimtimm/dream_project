import { profileApi } from '../api/api';
import { stopSubmit } from 'redux-form';

const ADD_POST = 'profile/ADD-POST';
const PROFILE_USER_DATA = 'profile/PROFILE_USER_DATA';
const SET_STATUS = 'profile/SET_STATUS';
const SET_PHOTO = 'profile/SET_PHOTO';
const SET_EDIT_FORM = 'profile/SET_EDIT_FORM';

export const onAddPost = (data) => ({ type: ADD_POST, data });
export const onProfileUserData = (profileUserData) => ({ type: PROFILE_USER_DATA, profileUserData });
export const onSetStatus = (status) => ({ type: SET_STATUS, status });
export const onSetPhoto = (photo) => ({ type: SET_STATUS, photo });
export const onSetEditForm = (flag) => ({ type: SET_EDIT_FORM, flag });

export const getProfileUser = (userId) =>  async (dispatch) => {
    let response = await profileApi.getProfileUser(userId);
    dispatch(onProfileUserData(response.data));
  }

export const getStatusUser = (userId) => async (dispatch) => {
    let response = await profileApi.getStatus(userId);
    dispatch(onSetStatus(response.data));
  }

export const updateStatusUser = (status) => async (dispatch) => {
    let response = await profileApi.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(onSetStatus(status));
    }
  }

  export const sendPhoto = (photo) => async (dispatch) => {
    let response = await profileApi.setPhoto(photo);
    if (response.data.resultCode === 0) {
      dispatch(onSetPhoto(response.data.data.photos));
    }
  }

  export const setNewUserData = (formData) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let response = await profileApi.setUserData(formData);
    if (response.data.resultCode === 0) {
      dispatch(getProfileUser(userId));
      dispatch(onSetEditForm(false));
    } else {
      let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
      dispatch(stopSubmit('profileUserDataForm', { _error: messages }))
    }
  }
  
let initialState = {
  postsArr: [
    { message: 'Helo mine world!', count: 15, id: 1 },
    { message: 'Mi first post', count: 20, id: 2 },
    { message: 'Mi last post', count: 25, id: 3 }
  ],
  profileUserData: '',
  status: '',
  editForm: false
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let post = action.data.message;
      return {
        ...state,
        postsArr: [...state.postsArr, { message: post, count: 15, id: 4 }]
      }

    case PROFILE_USER_DATA:
      return {
        ...state,
        profileUserData: action.profileUserData
      }
      case SET_EDIT_FORM:
      return {
        ...state,
        editForm: action.flag
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
      case SET_PHOTO:
        return {
          ...state,
          profileUserData: {...state.profileUserData, photos: {
            ...state.profileUserData.photos, small:action.photo}
        }
      }
    default:
      return state;
  }

}

export default profileReduser;