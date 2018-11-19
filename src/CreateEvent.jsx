import React, { Component } from 'react';
import { Grid, Form, Checkbox, Button, Card, Item, Select } from 'semantic-ui-react';

/* ================================ CONFIGURATION ================================ */
type Props = {};
type State = {};

var areas = [
  { text: 'Tecnologia', value: 'tecnologia' },
  { text: 'Quimica', value: 'quimica' },
];

class CreateEventComponent extends Component<Props, State> {
  /* ================================ DECLARATIONS ================================ */
  state = {
  };

  /* ================================ RENDER ================================ */
  render() {
    return (
      <div style={eventsContainerStyles}>
        <Card style={{ width: '100%' }}>
          <Card.Content>
            <Item>
              <Item.Content>
                <Form>
                  <h1>Crear Evento</h1>
                  <Form.Field>
                    <label>Nombre del Evento</label>
                    <input placeholder='Mi primer evento' />
                  </Form.Field>
                  <Form.TextArea
                    label='Descripción'
                    placeholder='Platicanos más acerca del evento...'
                  />
                  <Form.Field
                    control={Select}
                    options={areas}
                    label={{ children: 'Area', htmlFor: 'form-select-control-area' }}
                    placeholder='Selecciona un area...'
                    search
                    searchInput={{ id: 'form-select-control-area' }}
                  />
                  <Form.Group unstackable widths={3}>
                    <Form.Input label='Edificio' placeholder='CIAP' />
                    <Form.Input label='Piso' placeholder='3' />
                    <Form.Input label='Salon' placeholder='304' />
                  </Form.Group>
                  <Form.Field>
                    <label>Capacidad Necesaria</label>
                    <input type='number' max={10} />
                  </Form.Field>
                  <Form.Field>
                    <label>Poster</label>
                    <Button>Cargar</Button>
                  </Form.Field>
                  <Button type='submit'>Submit</Button>
                </Form>
              </Item.Content>
            </Item>
          </Card.Content>
        </Card>
      </div>
    );
  }

  /* ================================ LOGIC ================================ */
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
