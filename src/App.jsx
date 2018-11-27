import React, { Component } from 'react';
import Home from './Home';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Admin, Resource, ListGuesser, fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import HomeAdmin from './HomeAdmin';
import Cookies from 'universal-cookie';
import { httpGet } from './api/HttpRequests';
import { Login } from './Login';
import { Signup } from './Signup';
import MainContent from './MainContent';

/* ================================ CONFIGURATION ================================ */

type Props = {};
type State = {};

class App extends Component<Props, State> {
  /* ================================ DECLARATIONS ================================ */
  state = {
    isAuth: undefined,
  };

  /* ================================ RENDER ================================ */
  render() {
    const { isAuth } = this.state;
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              {isAuth && <Route path="/admin" component={HomeAdmin} />}
              {isAuth && <Route path="/" component={MainContent} />}
              {isAuth === false && <Redirect to="/login" />}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }

  /* ================================ LOGIC ================================ */
  async componentDidMount() {
    const cookies = new Cookies();
    const email = cookies.get('email');
    const authentication_token = cookies.get('authentication_token');
    const response = await httpGet(`sessions`, {
      email: email,
      authentication_token: authentication_token,
    });
    if (!response) {
      this.setState({ isAuth: true });
    }
  }
}

/* ================================ STYLES ================================ */

export default App;
