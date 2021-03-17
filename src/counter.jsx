import React from 'react';

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-danger ">Counter</h1>
        <div>
          <button className="badge badge-success m-2" onClick={this.decrement}>-</button>
          <span>{this.state.count}</span>
          <button className="badge badge-success m-2" onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

export default Counter;