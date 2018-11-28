import React, { Component } from 'react';
import {
  Grid,
  Rail,
  Sticky,
  Segment,
  Input,
  Popup,
  Button,
  Dropdown,
  Icon,
} from 'semantic-ui-react';
import ShowEventsComponent from './ShowEvents.jsx';
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
    var { events, contextRef, date, search } = this.state;
    return (
      <div style={eventsContainerStyles}>
        <Grid divided="vertically" style={{ marginTop: '45px' }}>
          <Rail style={{ margin: '70px 10px', width: '70%', zIndex: '5' }}>
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
          <Grid.Row columns={2}>
            <Grid.Column width={5} textAlign="left">
              <Rail style={{ margin: '70px 10px', width: '100%', zIndex: '5' }}>
                <Sticky>
                  <CategoriesComponent />
                </Sticky>
              </Rail>
            </Grid.Column>
            <Grid.Column width={1} />
            <Grid.Column width={10}>
              <ShowEventsComponent events={events} />
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
    var events: Event[] = (await httpGet(`events`)) || dummyEvents;
    events = events.filter(x =>
      x.name.toLowerCase().includes(search.toLowerCase()),
    );
    this.setState({ events: events });
  }

  handleChangeSearch = async (e, data) => {
    this.setState({ search: e.target.value });
    this.getEvents(e.target.value);
  };

  handleContextRef = contextRef => this.setState({ contextRef });
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
