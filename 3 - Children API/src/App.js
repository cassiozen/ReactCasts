import React, { Component } from 'react';
import SlideShow from './SlideShow';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SlideShow>
          <img src="http://placekitten.com/300/200" alt="Cat Pic" />
          <img src="http://placekitten.com/300/201" alt="Cat Pic" />
          <img src="http://placekitten.com/300/202" alt="Cat Pic" />
        </SlideShow>
      </div>
    );
  }
}

export default App;
