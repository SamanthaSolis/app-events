import React, { Component } from 'react';
import Event from './models/Event.jsx';
import EventComponent from './EventComponent.jsx';
import { httpGet } from './api/HttpRequests.jsx';
import Cookies from 'universal-cookie';

/* ================================ CONFIGURATION ================================ */
type Props = {};
type State = {
  events: Event[],
};

class RegisteredEventsComponent extends Component<Props, State> {
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
    var registers = (await httpGet(`registers`)) || [];
    const cookies = new Cookies();
    const email = cookies.get('email');
    var students = await httpGet(`students`, { email: email });
    registers = registers.filter(x => x.student_id === students[0].id);
    var events = [];
    for (let register of registers) {
      const event = await httpGet(`events/${register.event.id}`);
      events.push(event);
    }
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

export default RegisteredEventsComponent;
