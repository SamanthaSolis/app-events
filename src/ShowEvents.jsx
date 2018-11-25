import React, { Component } from 'react';
import EventComponent from './EventComponent.jsx';

type Props = {
  events: Event[],
};
type State = {};

class ShowEventsComponent extends Component<Props, State> {
  state = {};

  render() {
    var { events } = this.props;
    return (
      <div>
        {events.map(event => (
          <EventComponent key={event.id} event={event} />
        ))}
      </div>
    );
  }
}

export default ShowEventsComponent;
