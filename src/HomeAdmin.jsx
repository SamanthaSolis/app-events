import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { Admin, Resource, ListGuesser, fetchUtils, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { EventList, EventCreate, EventEdit } from './AdminEvent';
import { PlaceList, PlaceCreate, PlaceEdit } from './AdminPlace';
import { StudentList, StudentEdit, StudentCreate } from './AdminStudent';
import { EmployeeList, EmployeeEdit, EmployeeCreate } from './AdminEmployee';
import { Student_groupList, Student_groupEdit, Student_groupCreate } from './AdminStudentGroup';
import { ReservationList, ReservationEdit, ReservationCreate } from './AdminReservation';
import { RegisterList, RegisterEdit, RegisterCreate } from './AdminRegister';


/* ================================ CONFIGURATION ================================ */
const httpClient = (url, options = {}) => {
  if (!options.headers) {
    const cookies = new Cookies();
    const auth_token = cookies.get('access_token');
    options.headers = new Headers({
      Accept: 'application/json',
      Authorization: `Bearer ${auth_token}`,
    });
  }
  //options.headers.set('Access-Control-Allow-Credentials', true);
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = jsonServerProvider('http://localhost:3001', httpClient);

type Props = {};
type State = {};

class HomeAdmin extends Component<Props, State> {
  /* ================================ DECLARATIONS ================================ */
  state = {};

  /* ================================ RENDER ================================ */
  render() {
    return (
      <Admin dataProvider={dataProvider}>
        <Resource
          name="events"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
        />
        <Resource
          name="places"
          list={PlaceList}
          edit={PlaceEdit}
          create={PlaceCreate}
        />
        <Resource
          name="students"
          list={StudentList}
          edit={StudentEdit}
          create={StudentCreate}
        />
        <Resource 
          name="employees" 
          list={EmployeeList} 
          edit={EmployeeEdit} 
          create={EmployeeCreate}
          />
        <Resource 
          name="student_groups" 
          list={Student_groupList} 
          edit={Student_groupEdit}
          create={Student_groupCreate} 
          />
        <Resource name="reservations" 
          list={ReservationList} 
          edit={ReservationEdit} 
          create={ReservationCreate} 
          />
        <Resource name="registers" 
        list={RegisterList} 
        edit={RegisterEdit} 
        create={RegisterCreate} />
      </Admin>
    );
  }

  /* ================================ LOGIC ================================ */
}

/* ================================ STYLES ================================ */

export default HomeAdmin;
