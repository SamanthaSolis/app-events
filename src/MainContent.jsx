import React, { Component } from 'react';
import MenuComponent from './Menu.jsx';
import EventsComponent from './Events.jsx';
import ProfileComponent from './Profile.jsx';
import CreateEventComponent from './CreateEvent.jsx';
import MyEventsComponent from './MyEvents.jsx';
import DetailedEvent from './DetailedEvent.jsx';
import RegisteredEventsComponent from './RegisteredEvents.jsx';
import { Route, Link } from 'react-router-dom';
import { Button, Icon, Menu, Sidebar } from 'semantic-ui-react';
import Cookies from 'universal-cookie';

/* ================================ CONFIGURATION ================================ */
type Props = {};
type State = {
  isVisible: boolean,
};
//<Header updateCurrentUser={this.updateCurrentUser} />
export default class MainContent extends Component<Props, State> {
  /* ================================ DECLARATIONS ================================ */
  state = { isVisible: false };

  /* ================================ RENDER ================================ */
  render() {
    const { isVisible } = this.state;

    return (
      <Sidebar.Pushable style={{ overflow: 'hidden' }}>
        <Sidebar
          as={Menu}
          animation="push"
          direction="left"
          icon="labeled"
          inverted
          vertical
          onHide={this.changeVisibility}
          visible={isVisible}
          size="huge"
          width="thin"
        >
          <Menu.Item as={Link} to="/profile">
            <Icon name="user circle" size="huge" />
            <h4>Mi Perfil</h4>
          </Menu.Item>
          <Menu.Item>
            <Button
              primary
              style={{ padding: '10px' }}
              as={Link}
              to="/create-event"
            >
              Crear Evento
            </Button>
          </Menu.Item>
          <Menu.Item as={Link} to="/registered-events">
            Eventos Registrados
          </Menu.Item>
          <Menu.Item as={Link} to="/my-events">
            Mis Eventos
          </Menu.Item>
          <Menu.Menu>
            <Menu.Item as="a" onClick={this.logout}>
              Log Out
            </Menu.Item>
          </Menu.Menu>
        </Sidebar>
        <Sidebar.Pusher dimmed={isVisible}>
          <MenuComponent handleSidebar={this.changeVisibility} />
          <div
            style={{
              display: 'grid',
              overflow: 'auto',
              height: 'calc(100vh - 65px)',
            }}
          >
            <Route path="/" exact component={EventsComponent} />
            <Route path="/events" exact component={EventsComponent} />
            <Route path="/events/:id" component={DetailedEvent} />
            <Route path="/profile/" component={ProfileComponent} />
            <Route path="/create-event/" component={CreateEventComponent} />
            <Route path="/my-events/" component={MyEventsComponent} />
            <Route
              path="/registered-events/"
              component={RegisteredEventsComponent}
            />
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }

  /* ================================ LOGIC ================================ */
  changeVisibility = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };
  handleItemClick = (e, { name }) => {
    this.setState({ currentView: name });
  };

  logout = async () => {
    const cookies = new Cookies();
    cookies.set('email', null);
    cookies.set('access_token', null);
    this.props.changePage('/login');
  };
}

/* ================================ STYLES ================================ */
