import React, { Component } from 'react';
import Event from './models/Event.jsx';
import EventComponent from './EventComponent.jsx';
import { httpGet } from './api/HttpRequests.jsx';
import { dummyEvents } from './utils/DummyData.jsx';

/* ================================ CONFIGURATION ================================ */
type Props = {};
type State = {
  events: Event[],
};

class MyEventsComponent extends Component<Props, State> {
  /* ================================ DECLARATIONS ================================ */
  state = {
    events: [],
  };

  /* ================================ RENDER ================================ */
  render() {
    var { events } = this.state;
    return (
      <div style={eventsContainerStyles}>
        {events.map(event => (
          <EventComponent event={event} />
        ))}
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
  width: '70%',
  margin: '0px auto',
  background: '#F7F8FA',
  minHeight: 'calc(100% - 65px)',
};

export default MyEventsComponent;
