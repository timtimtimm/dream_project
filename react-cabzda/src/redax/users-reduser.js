import { userApi } from '../api/api';
import { changeInArray } from '../utils/changeInArray';

const FOLLOW = 'usersPage/FOLLOW';
const UNFOLLOW = 'usersPage/UNFOLLOW';
const SETUSERS = 'usersPage/SETUSERS';
const SET_CURRENT_PAGE = 'usersPage/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'usersPage/SET_TOTAL_USERS_COUNT';
const SET_PRELOADER = 'usersPage/SET_PRELOADER';
const TOGLE_FOLLOWED_PROGRESS = 'usersPage/TOGLE_FOLLOWED_PROGRESS';

export const onFollow = (id) => ({ type: FOLLOW, id, });
export const onUnfollow = (id) => ({ type: UNFOLLOW, id, });
export const onSetUsers = (users) => ({ type: SETUSERS, users, });
export const onSetCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const onSetTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const onSetPreloader = (preloaderValue) => ({ type: SET_PRELOADER, preloaderValue });
export const onTogleFollowedProgress = (userId, status) => ({ type: TOGLE_FOLLOWED_PROGRESS, userId, status });

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(onSetPreloader(true));
  dispatch(onSetCurrentPage(currentPage));
  let data = await userApi.getUsersApi(currentPage, pageSize);
  dispatch(onSetPreloader(false));
  dispatch(onSetUsers(data.items));
  dispatch(onSetTotalUsersCount(data.totalCount));
}

let followUnFollow = async (dispatch, userId, apiMetod, actionCreator) => {
  dispatch(onTogleFollowedProgress(userId, true));
  let data = await apiMetod(userId);

  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(onTogleFollowedProgress(userId, false))
}

export const follow = (userId) => async (dispatch) => {
  followUnFollow(dispatch, userId, userApi.Unfollow, onUnfollow);
}
/* dispatch(onTogleFollowedProgress(userId, true));
 let data = await userApi.Unfollow(userId)

 if (data.resultCode == 0) {
   dispatch(onUnfollow(userId));
 }
 dispatch(onTogleFollowedProgress(userId, false))
}*/

export const unFollow = (userId) => async (dispatch) => {
  followUnFollow(dispatch, userId, userApi.Follow, onFollow);
}
/* dispatch(onTogleFollowedProgress(userId, true));
 let data = await userApi.Follow(userId)

 if (data.resultCode == 0) {
   dispatch(onFollow(userId));
 }
 dispatch(onTogleFollowedProgress(userId, false))
}*/

let initialState = {
  users: [],
  totalUsersCount: 0,
  pageSize: 100,
  currentPage: 1,
  preloader: false,
  followedProgress: []
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state, users:
          changeInArray(state.users, 'id', action.id, { followed: true })
      }

    case UNFOLLOW:
      return {
        ...state, users:
          changeInArray(state.users, 'id', action.id, { followed: false })
      };
    case SETUSERS:

      return {
        ...state, users: action.users,
      }
    case SET_CURRENT_PAGE:

      return {
        ...state, currentPage: action.currentPage,
      }
    case SET_TOTAL_USERS_COUNT:

      return {
        ...state, totalUsersCount: action.totalUsersCount,
      }
    case SET_PRELOADER:

      return {
        ...state, preloader: action.preloaderValue,
      }
    case TOGLE_FOLLOWED_PROGRESS:

      return {
        ...state,
        followedProgress: action.status
          ? [...state.followedProgress, action.userId]
          : [state.followedProgress.filter(id => id !== action.userId)]
      }
    default:
      return state;
  }

}

export default usersReduser;