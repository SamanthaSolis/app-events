import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ShowEventsComponent from './ShowEvents.jsx';
import CategoriesComponent from './Categories.jsx';
import { httpGet } from './api/HttpRequests.jsx';
import { Event } from './models/Event.jsx';
import { dummyEvents } from './utils/DummyData.jsx';

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
    var { events } = this.state;
    return (
      <div style={eventsContainerStyles}>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column width={5} textAlign="left">
              <CategoriesComponent />
            </Grid.Column>
            <Grid.Column width={11}>
              <ShowEventsComponent events={events} />
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
    var events: Event[] = (await httpGet(`events`)) || dummyEvents;
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
