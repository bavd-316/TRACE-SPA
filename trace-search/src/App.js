import React, { Component } from 'react';
import './App.css';
import DisplayQuestions from './components/question/displayQuestion';
import DisplayReports from './components/report/displayReport';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplayReports/>
      </div>
    );
  }
}

export default App;
