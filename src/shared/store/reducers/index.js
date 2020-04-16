import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import userAuthencation from './Auth';

const appReducer = combineReducers({
  routing,
  userAuthencation,
});

export default (rootReducer = (state, action) => {
  // NOTE: Resets the redux store on user logout
  if (action.type === 'LOGOUT_REQUEST') {
    state = undefined;
  }

  return appReducer(state, action);
});
