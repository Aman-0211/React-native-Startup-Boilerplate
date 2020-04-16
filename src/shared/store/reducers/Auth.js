import {GET_USER_AUTHENTICATION, RESET_USER_DATA} from '../constants';

const initialState = {
  data: [],
  loggedin: false,
};

const userAuthencation = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_AUTHENTICATION:
      return {
        ...state,
        loggedin: true,
        data: action.payload,
      };
    case RESET_USER_DATA:
      console.log('action', action);

      return initialState;
    default:
      return state;
  }
};
export default userAuthencation;
