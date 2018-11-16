import React, { Component } from 'react';
import {
  Grid,
  List,
  Card,
  Header,
  Image,
  Button,
  Popup,
  Icon,
  Input,
  Segment,
  Container,
  Item,
  Label,
} from 'semantic-ui-react';

class ShowEventsComponent extends Component {
  state = {
    allEvents: [],

    events: [
      {
        name: 'Concierto',
        date: '10/08/2018',
        time: '2:00 PM',
        location: {
          name: 'Aulas 4',
          building: 'Aulas 4',
          floor: '4',
          classroom: '403',
          max_capacity: '30',
        },
        description: 'Estará del 1 omg',
        poster:
          'https://imgc.allpostersimages.com/img/print/posters/teen-wolf-official-movie-poster-print_a-G-8848874-0.jpg',
      },
      {
        name: 'Conferencia',
        date: '02/28/2018',
        time: '10:00 PM',
        location: {
          name: 'Aulas 3',
          building: 'Aulas 3',
          floor: '1',
          classroom: '103',
          max_capacity: '20',
        },
        description: 'Estará del 2 omg',
        poster:
          'https://images-na.ssl-images-amazon.com/images/I/51l1Emoeq3L.jpg',
      },
      {
        name: 'Concierto2',
        date: '10/08/2018',
        time: '2:00 PM',
        location: {
          name: 'Aulas 4',
          building: 'Aulas 4',
          floor: '4',
          classroom: '403',
          max_capacity: '30',
        },
        description: 'Estará del 1 omg',
        poster:
          'https://images-na.ssl-images-amazon.com/images/I/71wn3RxiwkL._SY679_.jpg',
      },
    ],
  };

  handleChange = (e, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };

  render() {
    return <React.Fragment>{this.renderEvents()}</React.Fragment>;
  }

  renderEvents = () => {
    var paragraph = 'lolololo';
    return (
      <Card>
        <Card.Content>
          <Item>
            <Item.Image
              height="200"
              src="https://images-na.ssl-images-amazon.com/images/I/71wn3RxiwkL._SY679_.jpg"
            />

            <Item.Content>
              <Item.Header as="a">12 Years a Slave</Item.Header>
              <Item.Meta>
                <span className="cinema">Union Square 14</span>
              </Item.Meta>
              <Item.Description>{paragraph}</Item.Description>
              <Item.Extra>
                <Label>IMAX</Label>
                <Label icon="globe" content="Additional Languages" />
              </Item.Extra>
            </Item.Content>
          </Item>
        </Card.Content>
      </Card>
    );
  };
}

/*
const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

const CardExampleCardProps = () => (
  <Card
    image='/images/avatar/large/elliot.jpg'
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
  />
)

export default CardExampleCardProps
*/

export default ShowEventsComponent;
