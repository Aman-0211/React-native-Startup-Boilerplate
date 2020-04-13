import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import injectClient from './middlewares';

export const configureStore = (client, preloadedState) => {
  const finalCreateStore = compose(
    applyMiddleware(injectClient(client), thunk),
    typeof window !== 'undefined' && window.devToolsExtension
      ? window.devToolsExtension()
      : f => f,
  )(createStore);

  return finalCreateStore(reducer, preloadedState);
};
