import React, { Component } from 'react';
import './Menu.css';
import { Menu } from 'semantic-ui-react'
import { Search } from 'semantic-ui-react'
import { Header, Button, Popup, Grid, Icon, Input, Segment } from 'semantic-ui-react'

class MenuComponent extends Component {
  render() {

    //const { activeItem } = this.state

    return (
      <Segment className="turquoise" inverted style={{ borderRadius: '0px' }}>
        <Menu className="turquoise" inverted pointing>
        <Menu.Item>
          <img src='/logo.png' />
        </Menu.Item>

        <Menu.Item
          name='features'
          //active={activeItem === 'features'}
          //onClick={this.handleItemClick}
        >
          Features
        </Menu.Item>

        <Menu.Item
          name='testimonials'
          //active={activeItem === 'testimonials'}
          //onClick={this.handleItemClick}
        >
          Testimonials
        </Menu.Item>
        <Menu.Menu position='right'>
            <Input transparent icon inverted
              style={{ marginRight: '20px', width: '250px' }}
              placeholder='Buscar Evento...'
              icon='search'
              iconPosition='left'
            />
            <Popup
              trigger={
                <Button className="turquoise" icon secondary>
                  Filtros
                  <Icon name='angle down' />
                </Button>
              }
              flowing hoverable
            >
              Algo
            </Popup>
        </Menu.Menu>
      </Menu>
      </Segment>
    )
  }
}


export default MenuComponent;
