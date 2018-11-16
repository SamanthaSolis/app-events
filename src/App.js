import React, { Component } from 'react';
import './App.css';
import MenuComponent from './Menu';
import EventsComponent from './Events';

/* ================================ CONFIGURATION ================================ */

class App extends Component {
  /* ================================ DECLARATIONS ================================ */
  state = {};

  /* ================================ RENDER ================================ */
  render() {
    return (
      <div className="App" style={{ height: '100vh' }}>
        <MenuComponent />
        <EventsComponent />
      </div>
    );
  }

  /* ================================ LOGIC ================================ */
}

/* ================================ STYLES ================================ */

export default App;
