import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeAdmin from './HomeAdmin';
import Cookies from 'universal-cookie';
import { httpGet } from './api/HttpRequests';
import { Login } from './Login';
import { Signup } from './Signup';
import MainContent from './MainContent';

/* ================================ CONFIGURATION ================================ */

type Props = {};
type State = {};

export default class App extends Component<Props, State> {
  /* ================================ DECLARATIONS ================================ */
  state = { isAuth: undefined };

  /* ================================ RENDER ================================ */
  render() {
    const { isAuth } = this.state;
    return (
      <div>
        <Router ref="router">
          <div>
            <Switch>
              {isAuth === false && (
                <Route exact path="/login" component={Login} />
              )}
              {isAuth === false && (
                <Route exact path="/signup" component={Signup} />
              )}
              {isAuth === true && <Route path="/admin" component={HomeAdmin} />}
              {isAuth === true && <Route path="/" component={MainContent} />}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }

  /* ================================ LOGIC ================================ */
  async componentDidMount() {
    const response = await httpGet(`test`);
    this.setState({ isAuth: !!response });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isAuth != undefined && prevState.isAuth !== this.state.isAuth) {
      if (this.state.isAuth === true) {
        this.refs.router.history.push('/events');
      } else if (this.state.isAuth === false) {
        this.refs.router.history.push('/login');
      }
    }
  }
}

/* ================================ STYLES ================================ */
