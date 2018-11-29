import React, { Component } from 'react';
import {
  Grid,
  Rail,
  Sticky,
  Input,
  Popup,
  Button,
  Dropdown,
} from 'semantic-ui-react';
import ShowEventsComponent from './ShowEvents.jsx';
import DetailedEvent from './DetailedEvent.jsx';
import CategoriesComponent from './Categories.jsx';
import { httpGet } from './api/HttpRequests.jsx';
import { Event } from './models/Event.jsx';
import { dummyEvents } from './utils/DummyData.jsx';
import DatePicker from './components/DatePicker.jsx';
import { handleChange } from './utils/StateUtil.jsx';

/* ================================ CONFIGURATION ================================ */
type Props = {};
type State = {
  events: Event[],
};

class EventsComponent extends Component<Props, State> {
  /* ================================ DECLARATIONS ================================ */
  state = {
    events: [],
    date: '',
    search: '',
  };

  /* ================================ RENDER ================================ */
  render() {
    const { events, date, search } = this.state;
    return (
      <div style={eventsContainerStyles}>
        <Grid divided="vertically" style={{ marginTop: '45px' }}>
          <Rail
            position="left"
            internal
            style={{
              margin: '70px auto',
              left: 'auto',
              width: '70%',
              zIndex: '5',
              height: '45px',
            }}
          >
            <Sticky>
              <Input
                style={searchEventStyle}
                value={search}
                onChange={this.handleChangeSearch}
                type="text"
                placeholder="Buscar Evento..."
                icon="search"
                iconPosition="left"
                labelPosition="right"
                action={
                  <Popup
                    position="bottom right"
                    wide
                    trigger={
                      <Dropdown
                        icon="filter"
                        floating
                        button
                        className="icon"
                      />
                    }
                    on="click"
                    hideOnScroll
                  >
                    <div>
                      <DatePicker
                        name="date"
                        title="Fecha"
                        icon="calendar"
                        value={date}
                        onChange={handleChange(this)}
                      />
                    </div>
                  </Popup>
                }
              />
            </Sticky>
          </Rail>
          <Grid.Row columns={1}>
            <Grid.Column width={5}>
              <Rail
                position="left"
                internal
                attached
                close
                style={{ width: '100%', margin: 'auto 20px' }}
              >
                <Sticky offset={150}>
                  <CategoriesComponent />
                </Sticky>
              </Rail>
            </Grid.Column>
            <Grid.Column width={11}>
              <ShowEventsComponent
                events={events}
                setCurrentEvent={this.setCurrentEvent}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }

  /* ================================ LOGIC ================================ */
  async componentDidMount() {
    await this.getEvents(this.state.search);
  }

  async getEvents(search) {
    var reservations = (await httpGet(`reservations`)) || [];
    reservations = reservations.filter(x => x.approval === true);
    var events = [];
    for (let reservation of reservations) {
      const event = await httpGet(`events/${reservation.event.id}`);
      events.push(event);
    }
    events = events.filter(
      x => x.name && x.name.toLowerCase().includes(search.toLowerCase()),
    );
    this.setState({
      events: events,
    });
  }

  handleChangeSearch = async (e, data) => {
    this.setState({ search: e.target.value });
    this.getEvents(e.target.value);
  };
}

/* ================================ STYLES ================================ */
var eventsContainerStyles = {
  width: '70%',
  margin: '0px auto',
  background: '#F7F8FA',
  height: '100%',
};
var searchEventStyle = {
  height: '45px',
  width: '100%',
};

export default EventsComponent;
