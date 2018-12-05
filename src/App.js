import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Counter from './Counter';

const store = createStore();

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Counter />
        </Provider>
      </div>
    );
  }
}
