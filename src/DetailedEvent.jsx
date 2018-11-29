import React, { Component } from 'react';
import {
  Card,
  Item,
  Label,
  Image,
  GridRow,
  Grid,
  Button,
  Icon,
} from 'semantic-ui-react';
import Cookies from 'universal-cookie';
import { httpGet, httpPost } from './api/HttpRequests.jsx';
import { Link } from 'react-router-dom';

type Props = {
  event: Event,
};
type State = {};

export default class DetailedEvent extends Component<Props, State> {
  state = { event: undefined, isExpanded: false };

  render() {
    const { registered, event } = this.state;
    if (!event) {
      return <div />;
    }
    const fecha = new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    }).format(event.datetime);
    const hora = new Intl.DateTimeFormat('en-GB', {
      minute: 'numeric',
      hour: 'numeric',
    }).format(event.datetime);
    return (
      <div style={eventsContainerStyles}>
        <Button
          floated="left"
          size="mini"
          circular
          icon="arrow left"
          onClick={() => this.props.history.goBack()}
          style={{ position: 'absolute', margin: '10px' }}
        />
        <Card style={{ width: '90%', float: 'right', margin: '10px' }}>
          <Card.Content>
            <Item>
              <Item.Content>
                <Grid>
                  <GridRow>
                    <Grid.Column width={8}>
                      <Image src={event.poster} size="large" />
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <Item.Header as="h1">{event.name}</Item.Header>
                      <Item.Meta>
                        <div style={{ display: 'grid' }}>
                          <span className="cinema">
                            <b>FECHA: </b>
                            {fecha}
                          </span>
                          <span className="cinema">
                            <b>HORA: </b>
                            {hora}
                          </span>
                          <span className="cinema">
                            <b>LUGAR: </b>
                            {event.place.name}
                          </span>
                          <span className="cinema">
                            <b>CAPACIDAD MÁXIMA: </b>
                            {event.place.max_capacity} personas
                          </span>
                          <span className="cinema">
                            <b>PRECIO: </b>$ {event.price}
                          </span>
                          <span className="cinema">
                            <b>Contacto: </b>$ {event.contact}
                          </span>
                        </div>
                      </Item.Meta>
                      <Item.Extra>{this.renderTags}</Item.Extra>
                      <Item.Description>
                        <p>{event.description}</p>
                      </Item.Description>
                      <Item.Extra>
                        {registered === false && (
                          <Button
                            className="primary"
                            fluid
                            onClick={this.handleRegisterEvent}
                          >
                            Registrate Ahora!
                          </Button>
                        )}
                        {registered === true && (
                          <Button
                            as={Label}
                            size="large"
                            className="green"
                            fluid
                          >
                            Registrado!
                          </Button>
                        )}
                      </Item.Extra>
                    </Grid.Column>
                  </GridRow>
                </Grid>
              </Item.Content>
            </Item>
          </Card.Content>
        </Card>
      </div>
    );
  }

  renderTags = () => {
    const { event } = this.state;
    if (!event.tags) {
      return <div />;
    }
    return <Label>{event.tags}</Label>;
  };

  handleRegisterEvent = () => {
    this.registerEvent();
  };

  async componentDidMount() {
    await this.getEvent();
    await this.isRegistered();
  }

  isRegistered = async () => {
    const cookies = new Cookies();
    const email = cookies.get('email');
    const students = await httpGet('students', {
      email: email,
    });
    if (students) {
      const registration = await httpGet('registers', {
        student_id: students[0].id,
        event_id: this.props.match.params.id,
      });
      this.setState({
        registered: registration.length > 0,
      });
    }
  };

  registerEvent = async () => {
    const { event } = this.state;
    const cookies = new Cookies();
    const email = cookies.get('email');
    const students = await httpGet('students', {
      email: email,
    });
    if (students) {
      await httpPost('registers', {
        student_id: students[0].id,
        event_id: event.id,
        time: '',
      });
      await this.isRegistered();
    }
  };

  getEvent = async () => {
    const id = this.props.match.params.id;
    const event = await httpGet(`events/${id}`);
    this.setState({ event: event });
  };
}

var eventsContainerStyles = {
  width: '70%',
  margin: '0px auto',
  background: '#F7F8FA',
  height: '100%',
};
