import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <basic-carousel aria-label="Nature scenes" selection-wraps="true">
          <img src="images/image1.jpg" alt="Lake"/>
          <img src="images/image2.jpg" alt="Horses"/>
          <img src="images/image6.jpg" alt="Wheat"/>
          <img src="images/image3.jpg" alt="Mountain"/>
          <img src="images/image7.jpg" alt="Palm tree"/>
        </basic-carousel>
      </div>
    );
  }
}

export default App;
