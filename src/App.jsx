import React, { Component } from 'react';
import MenuComponent from './Menu.jsx';
import EventsComponent from './Events.jsx';

/* ================================ CONFIGURATION ================================ */
type Props = {};
type State = {};

class App extends Component<Props, State> {
  /* ================================ DECLARATIONS ================================ */
  state = {};

  /* ================================ RENDER ================================ */
  render() {
    return (
      <div style={appStyle}>
        <MenuComponent />
        <EventsComponent />
      </div>
    );
  }

  /* ================================ LOGIC ================================ */
}

/* ================================ STYLES ================================ */
var appStyle = {
  textAlign: 'center',
  height: '100vh',
};

export default App;
