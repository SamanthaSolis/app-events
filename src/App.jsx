import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import HomeAdmin from './HomeAdmin';
import Cookies from 'universal-cookie';
import { httpGet } from './api/HttpRequests';
import { Login } from './Login';
import { Signup } from './Signup';
import MainContent from './MainContent';
import { Segment, Loader, Dimmer } from 'semantic-ui-react';

/* ================================ CONFIGURATION ================================ */

type Props = {};
type State = {};

export default class App extends Component<Props, State> {
  /* ================================ DECLARATIONS ================================ */
  state = { isAuth: undefined };

  /* ================================ RENDER ================================ */
  render() {
    return (
      <div style={{ height: '100vh', overflow: 'hidden' }}>
        <Router ref="router">
          <Switch>
            <Route
              exact
              path="/login"
              render={props => (
                <Login {...props} changePage={this.changePage} />
              )}
            />
            <Route
              exact
              path="/signup"
              render={props => (
                <Signup {...props} changePage={this.changePage} />
              )}
            />
            <Route
              path="/admin"
              render={props =>
                this.loadRender(
                  <HomeAdmin {...props} changePage={this.changePage} />,
                )
              }
            />
            <Route
              path="/"
              render={props =>
                this.loadRender(
                  <MainContent {...props} changePage={this.changePage} />,
                )
              }
            />
          </Switch>
        </Router>
      </div>
    );
  }

  loadRender = comp => {
    const { isAuth } = this.state;
    return isAuth === undefined ? (
      <Segment>
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
        {comp}
      </Segment>
    ) : (
      comp
    );
  };

  /* ================================ LOGIC ================================ */
  async componentDidMount() {
    const response = await httpGet(`test`);
    this.setState({ isAuth: !!response });
  }

  changePage = async path => {
    this.refs.router.history.push(path);
    const response = await httpGet(`test`);
    this.setState({ isAuth: !!response });
  };
}

/* ================================ STYLES ================================ */
