import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ShowEventsComponent from './ShowEvents';
import CategoriesComponent from './CategoriesComponent';

/* ================================ CONFIGURATION ================================ */

class EventsComponent extends Component {
  /* ================================ DECLARATIONS ================================ */
  state = {};

  /* ================================ RENDER ================================ */
  render() {
    return (
      <div style={eventsContainerStyles}>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column width={5} textAlign="left">
              <CategoriesComponent />
            </Grid.Column>
            <Grid.Column width={11}>
              <ShowEventsComponent />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }

  /* ================================ LOGIC ================================ */
  async componentDidMount() {
    await this.getEvents();
  }

  async getEvents() {
    try {
      // TODO: Change to events.
      const response = await fetch(`http://localhost:3001/students`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      console.log(json);
      this.setState({ events: json });
    } catch (error) {
      console.log(error);
    }
  }
}

/* ================================ STYLES ================================ */
var eventsContainerStyles = {
  width: '80%',
  margin: '0px auto',
  background: '#F7F8FA',
  minHeight: 'calc(100% - 65px)',
};

export default EventsComponent;
