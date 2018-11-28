import React, { Component } from 'react';
import {
  Card,
  Item,
  Label,
  Image,
  GridRow,
  Grid,
  Button,
  Icon,
} from 'semantic-ui-react';

type Props = {
  event: Event,
};
type State = {};

export default class EventComponent extends Component<Props, State> {
  state = {};

  render() {
    var { event } = this.props;
    var fecha = new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    }).format(event.datetime);
    var hora = new Intl.DateTimeFormat('en-GB', {
      minute: 'numeric',
      hour: 'numeric',
    }).format(event.datetime);
    return (
      <Card style={{ width: '90%', float: 'right', margin: '10px' }}>
        <Card.Content>
          <Item>
            <Item.Content>
              <Grid>
                <GridRow>
                  <Grid.Column width={8}>
                    <Image src={event.poster} size="small" />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Item.Header as="a">
                      <h3>{event.name}</h3>
                    </Item.Header>
                    <Item.Meta>
                      <div style={{ display: 'grid' }}>
                        <span className="cinema">
                          <b>LUGAR: </b>
                          {event.place.name}
                        </span>
                        <span className="cinema">
                          <b>FECHA: </b>
                          {fecha}
                        </span>
                        <span className="cinema">
                          <b>HORA: </b>
                          {hora}
                        </span>
                      </div>
                    </Item.Meta>
                    <Item.Extra>{this.renderTags}</Item.Extra>
                    <Item.Description>
                      <p>{event.description}</p>
                    </Item.Description>
                  </Grid.Column>
                </GridRow>
              </Grid>
            </Item.Content>
          </Item>
        </Card.Content>
        <Card.Content extra>
          <a onClick={this.handleEventClick}>
            <Icon name="angle double down" />
            See more...
          </a>
        </Card.Content>
      </Card>
    );
  }

  renderTags = () => {
    const { event } = this.props;
    if (!event.tags) {
      return <div />;
    }
    return event.tags.map(tag => (
      <Label key={`${event.id}-${tag}`}>{tag}</Label>
    ));
  };

  handleEventClick = (e, data) => {
    this.props.setCurrentEvent(this.props.event);
  };
}
