import React from 'react';
import logo from './logo.svg';
import './App.css';

const images = [
  { src: 'images/image1.jpg', alt: 'Lake' },
  { src: 'images/image2.jpg', alt: 'Horses' },
  { src: 'images/image6.jpg', alt: 'Wheat' },
  { src: 'images/image3.jpg', alt: 'Mountain' },
  { src: 'images/image7.jpg', alt: 'Palm tree' }
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <basic-carousel aria-label="Nature scenes" selection-wraps="true">
          {images.map(image =>
            <img src={image.src} key={image.alt} alt={image.alt} />
          )}
        </basic-carousel>
      </div>
    );
  }
}

export default App;
