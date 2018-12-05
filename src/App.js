import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Counter from './Counter';

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider>
          <Counter />
        </Provider>
      </div>
    );
  }
}
