import React, { Component } from 'react';
import { render } from 'react-dom';
import Counter from './Counter';

export default class App extends Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}
