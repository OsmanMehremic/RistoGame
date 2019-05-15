import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.scss';

import Main from "./views";

import configureStore from './store';
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
