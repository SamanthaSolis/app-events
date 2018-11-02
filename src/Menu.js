import React, { Component } from 'react';
import './Menu.css';
import { Menu } from 'semantic-ui-react';
import { Search } from 'semantic-ui-react';
import {
  Header,
  Button,
  Popup,
  Grid,
  Icon,
  Input,
  Segment,
} from 'semantic-ui-react';

class MenuComponent extends Component {
  state = {
    activeItem: 'home',
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment className="turquoise" inverted style={{ borderRadius: '0px' }}>
        <Menu
          className="turquoise"
          inverted
          pointing
          secondary
          style={{ borderWidth: '0px' }}
        >
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>

          <Menu.Item
            name="events"
            active={activeItem === 'events'}
            onClick={this.handleItemClick}
          >
            Eventos
          </Menu.Item>
          <Menu.Menu position="right">
            <Input
              transparent
              inverted
              style={{ marginRight: '20px', width: '250px' }}
              placeholder="Buscar Evento..."
              icon="search"
              iconPosition="left"
            />
            <Popup
              trigger={
                <Button className="turquoise" icon secondary>
                  Filtros
                  <Icon name="angle down" />
                </Button>
              }
              flowing
              hoverable
            >
              Algo
            </Popup>
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}

export default MenuComponent;
