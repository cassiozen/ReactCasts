import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    counter: 0
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Cool Counter: {this.state.counter} !!</h2>
        </div>
        <p className="App-intro">
          <button
            onClick={() => {
              this.setState({counter:this.state.counter + 1});
            }}
          >Increment</button>
        </p>
      </div>
    );
  }
}

export default App;
