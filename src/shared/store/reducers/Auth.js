import {
  GET_USER_AUTHENTICATION,
  GET_USER_AUTHENTICATION_REQUEST,
  GET_USER_AUTHENTICATION_FAIL,
  RESET_USER_DATA,
} from '../constants';

const initialState = {
  isLoading: false,
  isErrored: false,
  data: [],
  loggedin: false,
};

const userAuthencation = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_AUTHENTICATION_REQUEST:
      return {
        ...state,
        isLoading: true,
        isErrored: false,
      };

    case GET_USER_AUTHENTICATION:
      return {
        ...state,
        isLoading: false,
        loggedin: true,
        data: action.payload,
      };
    case GET_USER_AUTHENTICATION_FAIL:
      console.log('error action', action);

      return {
        ...state,
        isErrored: true,
        isLoading: false,
      };
    case RESET_USER_DATA:
      return initialState;
    default:
      return state;
  }
};
export default userAuthencation;
