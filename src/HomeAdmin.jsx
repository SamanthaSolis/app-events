import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Admin, Resource, ListGuesser, fetchUtils, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { EventList, EventCreate, EventEdit } from './AdminEvent';
import { PlaceList, PlaceCreate, PlaceEdit } from './AdminPlace';
import { StudentList, StudentEdit, StudentCreate } from './AdminStudent';


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

class HomeAdmin extends Component<Props, State> {
  /* ================================ DECLARATIONS ================================ */
  state = {
  };

  /* ================================ RENDER ================================ */
  render() {
    return (
      <Admin dataProvider={dataProvider}>
        <Resource name="events" list={EventList} edit={EventEdit} create={EventCreate}/>
        <Resource name="places" list={PlaceList} edit={PlaceEdit} create={PlaceCreate}/>
        <Resource name="students" list={StudentList}  edit={StudentEdit} create={StudentCreate}/>
        <Resource name="employees" list={ListGuesser} edit={ListGuesser}/>
        <Resource name="student_groups" list={ListGuesser} edit={ListGuesser}/>
        <Resource name="reservations" list={ListGuesser} edit={ListGuesser}/>
        <Resource name="registers" list={ListGuesser} edit={ListGuesser}/>
      </Admin>
    );
  }






  /* ================================ LOGIC ================================ */

}

/* ================================ STYLES ================================ */

export default HomeAdmin;
