import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ShowEventsComponent from './ShowEvents.jsx';
import CategoriesComponent from './Categories.jsx';
import { httpGet } from './api/HttpRequests.jsx';
import { Event } from './models/Event.jsx';

/* ================================ CONFIGURATION ================================ */
type Props = {};
type State = {
  events: Event[],
};

class EventsComponent extends Component<Props, State> {
  /* ================================ DECLARATIONS ================================ */
  state = {
    events: [],
  };

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
    var events: Event[] = await httpGet(`events`);
    for (var event of events) {
      event.place = await httpGet(`places/${event.place_id}`);
    }
    this.setState({ events: events });
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
