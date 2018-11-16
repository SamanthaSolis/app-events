import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import DatePicker from './components/DatePicker.jsx';
import { Button, Popup, Icon, Input, Segment } from 'semantic-ui-react';
import { handleChange } from './utils/StateUtil.jsx';

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
            onClick={handleChange(this)}
          >
            Home
          </Menu.Item>

          <Menu.Item
            name="activeItem"
            value="events"
            active={activeItem === 'events'}
            onClick={handleChange(this)}
          >
            Eventos
          </Menu.Item>
          <Menu.Menu>
            <img src="logo.jpeg" alt="logo" style={logoStyle} />
          </Menu.Menu>
          <Menu.Menu position="right">
            <Input
              style={searchEventStyle}
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
                  onChange={handleChange(this)}
                />
              </div>
            </Popup>
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }

  /* ================================ LOGIC ================================ */
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

var searchEventStyle = {
  marginRight: '20px',
  width: '200px',
};

var logoStyle = {
  height: '50px',
  width: 'auto',
};

export default MenuComponent;
