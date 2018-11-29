import React, { Component } from 'react';
import {
  Card,
  Item,
  Label,
  Image,
  GridRow,
  Grid,
  Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

type Props = {
  event: Event,
};
type State = {};

export default class EventComponent extends Component<Props, State> {
  state = { isExpanded: false };

  render() {
    var { isExpanded } = this.state;
    var { event, showApproval, approval } = this.props;
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
      <Card
        as={Link}
        to={`/events/${event.id}`}
        onClick={() => this.props.router.history.pop()}
        style={{ width: '90%', float: 'right', margin: '10px' }}
      >
        <Card.Content>
          <Item>
            <Item.Content>
              <Grid>
                <GridRow>
                  <Grid.Column width={8}>
                    <Image
                      src={event.poster.url}
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
          {showApproval && (
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                display: 'inline',
              }}
            >
              <h4>
                <Icon
                  name={
                    approval === true
                      ? 'checkmark'
                      : approval === false
                      ? 'close'
                      : 'time'
                  }
                />
                {approval === true
                  ? 'Aprobado'
                  : approval === false
                  ? 'No Aprobado'
                  : 'Pendiente'}
              </h4>
            </div>
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

  handleDetailClick = (e, data) => {
    this.props.setCurrentEvent(this.props.event);
  };
}
