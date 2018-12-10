import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment = () => {
    this.dispatch({ type: 'INCREMENT' });
  };

  decrement = () => {
    this.dispatch({ type: 'DECREMENT' });
  };

  render() {
    return (
      <div id="container">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Counter);
