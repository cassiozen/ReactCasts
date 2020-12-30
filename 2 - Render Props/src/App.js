
import React, { Component } from 'react';
import ScrollPos from './faac/ScrollPos';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="spacer" />

        <ScrollPos>
          {
            position => <h1>{'Awesome Text!!!'.substr(0,position*15)}</h1>
          }
        </ScrollPos>

        <div className="spacer" />
      </div>
    );
  }
}

export default App;
