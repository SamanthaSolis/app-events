import React, { Component } from 'react';
import './Menu.css';
import { Menu } from 'semantic-ui-react';
import DatePicker from './components/DatePicker';
import { Button, Popup, Icon, Input, Segment } from 'semantic-ui-react';

/* ================================ CONFIGURATION ================================ */

class MenuComponent extends Component {
  /* ================================ DECLARATIONS ================================ */
  state = {
    activeItem: 'home',
    date: '',
  };

  /* ================================ RENDER ================================ */
  render() {
    const { date, activeItem } = this.state;
    return (
      <Segment className="turquoise" inverted style={menuContainerStyle}>
        <Menu
          className="turquoise"
          inverted
          pointing
          secondary
          style={menuStyle}
        >
          <Menu.Item
            name="activeItem"
            value="home"
            active={activeItem === 'home'}
            onClick={this.handleChange}
          >
            Home
          </Menu.Item>

          <Menu.Item
            name="activeItem"
            value="events"
            active={activeItem === 'events'}
            onClick={this.handleChange}
          >
            Eventos
          </Menu.Item>
          <Menu.Menu>
            <img src="logo.jpeg" alt="logo" style={logoStyle} />
          </Menu.Menu>
          <Menu.Menu position="right">
            <Input
              id="search-event"
              transparent
              inverted
              placeholder="Buscar Evento..."
              icon="search"
              iconPosition="left"
            />
            <Popup
              wide
              trigger={
                <Button className="turquoise" icon secondary>
                  Filtros
                  <Icon name="angle down" />
                </Button>
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
                  onChange={this.handleChange}
                />
              </div>
            </Popup>
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }

  /* ================================ LOGIC ================================ */
  handleChange = (e, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };
}

/* ================================ STYLES ================================ */
var menuContainerStyle = {
  borderRadius: '0px',
  padding: '5px',
  margin: '0px',
  height: '65px',
};

var menuStyle = {
  borderWidth: '0px',
};

var logoStyle = {
  height: '50px',
  width: 'auto',
};

export default MenuComponent;
