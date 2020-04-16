import {
  GET_SIGNUP_REQUEST,
  GET_SIGNUP_REQUEST_SUCCESS,
  GET_SIGNUP_REQUEST_FAIL,
} from './constant';

export const initialState = {
  isLoading: false,
  isErrored: false,
  data: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case GET_SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        isErrored: false,
      };

    case GET_SIGNUP_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case GET_SIGNUP_REQUEST_FAIL:
      return {
        ...state,
        isErrored: true,
        isLoading: false,
      };
  }
}
