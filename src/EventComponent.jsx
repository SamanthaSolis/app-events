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
  state = { isExpanded: false };

  render() {
    var { isExpanded } = this.state;
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
                    <Image
                      src={event.poster}
                      size={isExpanded ? 'large' : 'small'}
                    />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Item.Header as={isExpanded ? 'h1' : 'h3'}>
                      {event.name}
                    </Item.Header>
                    <Item.Meta>
                      <div style={{ display: 'grid' }}>
                        <span className="cinema">
                          <b>FECHA: </b>
                          {fecha}
                        </span>
                        <span className="cinema">
                          <b>HORA: </b>
                          {hora}
                        </span>
                        <span className="cinema">
                          <b>LUGAR: </b>
                          {event.place.name}
                        </span>
                        {isExpanded ? (
                          <React.Fragment>
                            <span className="cinema">
                              <b>Capacidad Máxima: </b>
                              {event.place.max_capacity}
                            </span>
                            <span className="cinema">
                              <b>PRECIO: </b>$ {event.place.price}
                            </span>
                          </React.Fragment>
                        ) : null}
                      </div>
                    </Item.Meta>
                    <Item.Extra>{this.renderTags}</Item.Extra>
                    {isExpanded ? (
                      <Item.Description>
                        <p>{event.description}</p>
                      </Item.Description>
                    ) : (
                      <div />
                    )}
                  </Grid.Column>
                </GridRow>
              </Grid>
            </Item.Content>
          </Item>
        </Card.Content>
        <Card.Content extra>
          {isExpanded ? (
            <a onClick={this.handleLessClick}>
              <Icon name="angle double up" />
              See less...
            </a>
          ) : (
            <a onClick={this.handleMoreClick}>
              <Icon name="angle double down" />
              See more...
            </a>
          )}
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

  handleMoreClick = (e, data) => {
    this.props.setCurrentEvent(this.props.event);
    this.setState({ isExpanded: true });
  };
  handleLessClick = (e, data) => {
    this.props.setCurrentEvent(undefined);
    this.setState({ isExpanded: false });
  };
}
