import React, { Component } from 'react';
import '../css/App.css';
import StopSelector from '../components/StopSelector';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StopSelector />
      </div>
    );
  }
}

export default App;
