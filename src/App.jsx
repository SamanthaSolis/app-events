import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Admin, Resource, ListGuesser, fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

/* ================================ CONFIGURATION ================================ */
const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({
      Accept: 'application/json'
    });
  }
  options.headers.set('Content-Type', 'application/json');
  options.headers.set('Access-Control-Allow-Credentials', true);
  return fetchUtils.fetchJson(url, options);
}
const dataProvider = jsonServerProvider('http://localhost:3001');

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
      <Admin dataProvider={dataProvider}>
        <Resource name="events" list={ListGuesser} />
        <Resource name="places" list={ListGuesser} />
        <Resource name="students" list={ListGuesser} />
        <Resource name="employees" list={ListGuesser} />
        <Resource name="reservations" list={ListGuesser} />
        <Resource name="student_groups" list={ListGuesser} />
        <Resource name="registers" list={ListGuesser} />
      </Admin>
    );
  }



  


  /* ================================ LOGIC ================================ */

}

/* ================================ STYLES ================================ */

export default App;
