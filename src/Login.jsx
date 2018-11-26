import React from 'react';
import axios from 'axios';
import { httpPost } from './api/HttpRequests';
import { handleChange } from './utils/StateUtil';
import Cookies from 'universal-cookie';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';


export class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isAuth: undefined,
  };

  render() {
    const { email, password, isAuth } = this.state;
    if (isAuth === true) {
      return <Redirect to='/events' />
    }

    return (
      <div>
        <h2>Log In</h2>
        <form>
          <input
            placeholder="Email"
            value={email}
            onChange={this.changeEmail}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={this.changePassword}
          />
          <button onClick={this.handleSignin}>
            Log In
          </button>
        </form>
      </div>
    );
  }

  changePassword = (e) => {
    this.setState({ password: e.target.value });
  }
  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  handleSignin = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.logIn(email, password);
  };

  logIn(email, password) {
    httpPost(`sessions`, {
      email: email,
      password: password,
    })
      .then((response) => {
        const cookies = new Cookies();
        cookies.set('email', response.email, { path: '/' });
        cookies.set('authentication_token', response.authentication_token, { path: '/' });
        this.setState({ isAuth: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
