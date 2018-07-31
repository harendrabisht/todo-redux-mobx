import React, { Component } from 'react';
import ReduxComponent from './Redux/ReduxComponent';
import './App.css';
import './Variable.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ReduxComponent/>
      </div>
    );
  }
}

export default App;
