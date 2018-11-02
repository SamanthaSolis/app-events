import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';
import { Button, Icon, Label } from 'semantic-ui-react';
import MenuComponent from './Menu';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuComponent />
      </div>
    );
  }
}

export default App;
