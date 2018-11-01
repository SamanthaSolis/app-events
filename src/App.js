import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var image = <img src={logo} className="App-logo" alt="logo" />;

class App extends Component {
  myName = "Uriel";
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {image}
          {this.renderEditContent("src/file.js")}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.myName}
          </a>
        </header>
      </div>
    );
  }

  renderEditContent(file) {
    return (
      <p>
        Edit <code>{file}</code> and save to reload.
      </p>
    );
  }
}

export default App;
