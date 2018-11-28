import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import axios from 'axios';

/* ================================ CONFIGURATION ================================ */
type Props = {};
type State = {
  currentuser: any,
};
export default class Home extends Component<Props, State> {
  /* ================================ DECLARATIONS ================================ */
  state = {
    currentUser: null,
  };

  /* ================================ RENDER ================================ */
  render() {
    return (
      <div style={appStyle}>
        <Switch />
      </div>
    );
  }

  /* ================================ LOGIC ================================ */
  componentDidMount() {
    axios
      .get('/users/check_for_user', {})
      .then(response => {
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
      .catch(error => {
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
