import React, { Component } from 'react';
import MenuComponent from './Menu.jsx';
import EventsComponent from './Events.jsx';
import ProfileComponent from './Profile.jsx';
import CreateEventComponent from './CreateEvent.jsx';
import MyEventsComponent from './MyEvents.jsx';
import RegisteredEventsComponent from './RegisteredEvents.jsx';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Button, Icon, Menu, Sidebar } from 'semantic-ui-react';
import axios from 'axios';
import {Login} from './Login';
import { Signup } from './Signup';
import MainContent from './MainContent';

/* ================================ CONFIGURATION ================================ */
type Props = {};
type State = {
  currentuser: any,
};
export default class Home extends Component<Props, State> {
  /* ================================ DECLARATIONS ================================ */
  state = {
    currentUser: null,
    authenticated: true
  };

  /* ================================ RENDER ================================ */
  render() {
    const {authenticated} = this.state;
    return (
      <div style={appStyle}>
        <Switch>
          
        </Switch>
      </div>
    );
  }

  /* ================================ LOGIC ================================ */
  componentDidMount() {
    axios
      .get('/users/check_for_user', {})
      .then((response) => {
        if (response.data.email) {
          this.setState({
            currentUser: response.data.email,
          });
        } else {
          this.setState({
            currentUser: null,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateCurrentUser(email) {
    this.setState({
      currentUser: email,
    });
  }
}

/* ================================ STYLES ================================ */
var appStyle = {
  height: '100vh',
};