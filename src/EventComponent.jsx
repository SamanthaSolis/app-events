import React, { Component } from 'react';
import { Card, Item, Label, Image, GridRow, Grid } from 'semantic-ui-react';

type Props = {
  event: Event,
};
type State = {};

class ShowEventsComponent extends Component<Props, State> {
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
      </Card>
    );
  }

  renderTags = () => {
    var { event } = this.props;
    if (!event.tags) {
      return null;
    }
    return event.tags.map(tag => (
      <Label key={`${event.id}-${tag}`}>{tag}</Label>
    ));
  };
}

export default ShowEventsComponent;