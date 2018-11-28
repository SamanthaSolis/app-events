import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import DatePicker from './components/DatePicker.jsx';
import { Button, Popup, Icon, Input, Segment, Image } from 'semantic-ui-react';
import { handleChange } from './utils/StateUtil.jsx';
import { Link } from 'react-router-dom';

/* ================================ CONFIGURATION ================================ */
type Props = {};
type State = {
  date: string,
};

class MenuComponent extends Component<Props, State> {
  /* ================================ DECLARATIONS ================================ */
  state = {
    date: '',
  };

  /* ================================ RENDER ================================ */
  render() {
    const { date } = this.state;
    return (
      <Segment className="turquoise" inverted style={menuContainerStyle}>
        <Menu
          className="turquoise"
          inverted
          pointing
          secondary
          style={menuStyle}
        >
          <Menu.Item onClick={this.props.handleSidebar}>
            <Icon name="user" />
          </Menu.Item>

          <Menu.Item as={Link} to="/events" style={{ padding: '0px' }}>
            <Image src="logo.jpg" alt="logo" style={logoStyle} />
          </Menu.Item>
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
  padding: '0px',
  margin: '0px',
};

export default MenuComponent;
