import React, {Component} from 'react';
import axios from 'axios';
import {Provider} from 'react-redux';
import {configureStore} from '../src/shared/store';
import RootStack from '../src/Routes';

export const store = configureStore(axios, {});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

export default App;
