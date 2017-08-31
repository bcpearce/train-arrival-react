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
          <Arrivals direction="northbound" limit="6" />
          <Arrivals direction="southbound" limit="6" />
        </div>
      </div>
    );
  }
}

export default App;
