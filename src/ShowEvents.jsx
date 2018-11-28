import React, { Component } from 'react';
import EventComponent from './EventComponent.jsx';

type Props = {
  events: Event[],
};
type State = {};

export default class ShowEventsComponent extends Component<Props, State> {
  state = {};

  render() {
    var { events, setCurrentEvent } = this.props;
    return (
      <div>
        {events.map(event => (
          <EventComponent
            key={event.id}
            event={event}
            setCurrentEvent={setCurrentEvent}
          />
        ))}
      </div>
    );
  }
}
