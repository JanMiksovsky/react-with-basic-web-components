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

  constructor(props) {
    super(props);
    this.state = { count: 3 };
  }

  countChanged(event) {
    this.setState({
      count: event.target.value
    });
  }

  render() {

    const visibleImages = images.slice(0, this.state.count);

    return (
      <div className="App">
        <div className="App-header">
          <p>
            <input type="number" value={this.state.count} min="1" max={images.length}
              onChange={event => this.countChanged(event)}
            />
          </p>
        </div>
        <basic-carousel aria-label="Nature scenes">
          {visibleImages.map(image =>
            <img src={image.src} key={image.alt} alt={image.alt} />
          )}
        </basic-carousel>
      </div>
    );
  }

}

export default App;
