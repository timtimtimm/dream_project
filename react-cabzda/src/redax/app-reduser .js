
import { getLogine } from './auth-reduser';

const SUCCESSED_INITIALISE = 'SUCCESSED_INITIALISE';

export const getSuccessedInitialise = () => 
  (dispatch) => {
    dispatch(getLogine()).then(() => {
      dispatch(setSuccessedInitialise())
    });
  }

let initialState = {
  initialise: false
};

const appReduser = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESSED_INITIALISE:
      return {
        ...state,
        initialise: true
      };

    default:
      return state;
  }
}

export const setSuccessedInitialise = () => (
  { type: SUCCESSED_INITIALISE }
);

export default appReduser;