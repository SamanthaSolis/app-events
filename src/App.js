import React, { Component } from 'react';
import './App.css';
import DatePicker from './components/DatePicker';
import MenuComponent from './Menu';
import EventsComponent from './Events';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '100vh' }}>
        <MenuComponent />
        <EventsComponent />
      </div>
    );
  }
}

export default App;
