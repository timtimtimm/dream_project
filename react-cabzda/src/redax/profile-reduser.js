import { profileApi } from '../api/api';

const ADD_POST = 'profile/ADD-POST';
const PROFILE_USER_DATA = 'profile/PROFILE_USER_DATA';
const SET_STATUS = 'profile/SET_STATUS';

export const onAddPost = (data) => ({ type: ADD_POST, data });
export const onProfileUserData = (profileUserData) => ({ type: PROFILE_USER_DATA, profileUserData });
export const onSetStatus = (status) => ({ type: SET_STATUS, status });

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

let initialState = {
  postsArr: [
    { message: 'Helo mine world!', count: 15, id: 1 },
    { message: 'Mi first post', count: 20, id: 2 },
    { message: 'Mi last post', count: 25, id: 3 }
  ],
  profileUserData: null,
  status: ''
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
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state;
  }

}

export default profileReduser;