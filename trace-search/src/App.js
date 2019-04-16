import React, { Component } from 'react';
import './App.css';
import DisplayReports from './components/report/displayReport';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>NU TRACE Testing Website</h1>
        <DisplayReports/>
      </div>
    );
  }
}

export default App;
