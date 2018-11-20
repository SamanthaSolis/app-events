import React, { Component } from 'react';
import { Grid, Form, Checkbox, Button, Card, Item, Select } from 'semantic-ui-react';
import { Event } from './models/Event.jsx';
import { Place } from './models/Place.jsx';
import { handleChange } from './utils/StateUtil.jsx';
import { httpPost } from './api/HttpRequests.jsx';

/* ================================ CONFIGURATION ================================ */
type Props = {};
type State = {
  name: string,
  description: string,
  place: Place,
};

var areas = [
  { text: 'Tecnologia', value: 'tecnologia' },
  { text: 'Quimica', value: 'quimica' },
];

class CreateEventComponent extends Component<Props, State> {
  /* ================================ DECLARATIONS ================================ */
  state = {
    event: {},
    place: {},
  };

  /* ================================ RENDER ================================ */
  render() {
    var { event, place } = this.state;
    return (
      <div style={eventsContainerStyles}>
        <Card style={{ width: '100%' }}>
          <Card.Content>
            <Item>
              <Item.Content>
                <Form onSubmit={this.handleSubmit}>
                  <h1>Crear Evento</h1>
                  <Form.Input
                    name='name'
                    label='Nombre del Evento'
                    control='input'
                    placeholder='Mi primer evento'
                    value={event.name}
                    onChange={this.handleChangeEvent}
                  />
                  <Form.TextArea
                    name='description'
                    label='Descripción'
                    placeholder='Platicanos más acerca del evento...'
                    value={event.description}
                    onChange={this.handleChangeEvent}
                  />
                  <Form.Field
                    name='area'
                    control={Select}
                    options={areas}
                    label={{ children: 'Area', htmlFor: 'form-select-control-area' }}
                    placeholder='Selecciona un area...'
                    search
                    searchInput={{ id: 'form-select-control-area' }}
                    value={event.area}
                    onChange={this.handleChangeEvent}
                  />
                  <Form.Group unstackable widths={3}>
                    <Form.Input
                      name='building'
                      label='Edificio'
                      placeholder='CIAP'
                      value={place.building}
                      onChange={this.handleChangePlace}
                    />
                    <Form.Input
                      name='floor'
                      label='Piso'
                      placeholder='3'
                      value={place.floor}
                      onChange={this.handleChangePlace}
                    />
                    <Form.Input
                      name='classroom'
                      label='Salón'
                      placeholder='304'
                      value={place.classroom}
                      onChange={this.handleChangePlace}
                    />
                  </Form.Group>
                  <Form.Input
                    name='max_capacity'
                    label='Capacidad Necesaria'
                    type='number'
                    max={10}
                    placeholder='304'
                    value={event.max_capacity}
                    onChange={this.handleChangeEvent}
                  />
                  <Form.Field>
                    <label>Poster</label>
                    <Button>Cargar</Button>
                  </Form.Field>
                  <Form.Input
                    name='tags'
                    label='Tags'
                    placeholder='Quimica, Tecnología, ...'
                    value={event.tags}
                    onChange={this.handleChangeEvent}
                  />
                  <Button type='submit'>Crear</Button>
                </Form>
              </Item.Content>
            </Item>
          </Card.Content>
        </Card>
      </div>
    );
  }

  /* ================================ LOGIC ================================ */
  handleSubmit = () => {
    this.createEvent();
  }

  handleChangeEvent = (e, { name, value }) => {
    this.setState({ event: { ...this.state.event, [name]: value } });
  }

  async createEvent() {
    var newEvent = await httpPost(`events`, this.event);
    console.log(newEvent);
  }

  handleChangePlace = (e, { name, value }) => {
    this.setState({ place: { ...this.state.place, [name]: value } });
  }
}

/* ================================ STYLES ================================ */

var eventsContainerStyles = {
  width: '70%',
  padding: '20px 40px',
  margin: '0px auto',
  background: '#F7F8FA',
  minHeight: 'calc(100% - 65px)',
};

export default CreateEventComponent;
