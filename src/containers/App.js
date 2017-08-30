import React, { Component } from 'react';
import '../css/App.css';
import Arrivals from '../components/Arrivals';
import StopSelector from '../components/StopSelector';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StopSelector />
        <div className="stop-arrivals">
          <Arrivals direction="northbound" />
          <Arrivals direction="southbound" />
        </div>
      </div>
    );
  }
}

export default App;
