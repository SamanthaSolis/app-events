import React, { Component } from 'react';
import { Card, Item, Label } from 'semantic-ui-react';

type Props = {
  events: Event[],
};
type State = {};

class ShowEventsComponent extends Component<Props, State> {
  state = {};

  handleChange = (e, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };

  render() {
    console.log(this.props);
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
