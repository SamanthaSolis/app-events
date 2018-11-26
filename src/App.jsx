import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Admin, Resource, ListGuesser, fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import HomeAdmin from './HomeAdmin';

/* ================================ CONFIGURATION ================================ */

type Props = {};
type State = {
};

class App extends Component<Props, State> {
  /* ================================ DECLARATIONS ================================ */
  state = {
  };

  /* ================================ RENDER ================================ */
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/admin" component={HomeAdmin} />
          </div>
        </Router>
      </div>
    );
  }

  /* ================================ LOGIC ================================ */

}

/* ================================ STYLES ================================ */

export default App;
