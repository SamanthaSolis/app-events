import React, { Component } from 'react';
import { Card, Item, Label, Image, ItemContent, GridRow, GridColumn, Grid } from 'semantic-ui-react';

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
    /*return ( <Grid padded>
    {this.props.events.map(event => (
      <Grid.Row key={event}>
        <Grid.Column>{this.renderEvent(event)}</Grid.Column>
      </Grid.Row>
    ))}
    </Grid> )*/
    return <div> {this.props.events.map(event => (this.renderEvent(event)))} </div>;

  }

  renderEvent = (event) => {
    var paragraph = 'lolololo';
    console.log(event);
    return (
      <Card style={{width:"90%", float:"right", margin:"10px"}}>
        <Card.Content>
          <Item>
            <Item.Content>
              <Grid>
                <GridRow>
                  <Grid.Column width={8}>
                    <Image src={event.poster} size='small'/>
                  </Grid.Column>
                  <Grid.Column width={8}>
                      <Item.Header as="a"><h3>{event.name}</h3></Item.Header>
                      <Item.Meta>
                        <div style={{display:"grid"}}>
                        <span className="cinema"><b>LUGAR: </b>{event.place.name}</span>
                        <span className="cinema"><b>FECHA: </b>
                        {new Intl.DateTimeFormat('en-GB', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: '2-digit',
                        }).format(event.datetime)}
                        </span>
                        <span className="cinema"><b>HORA: </b>
                        {new Intl.DateTimeFormat('en-GB', { 
                          minute: 'numeric', 
                          hour: 'numeric' 
                        }).format(event.datetime)}
                        </span>
                        </div>
                      </Item.Meta>
                      <Item.Extra>
                        <Label>TAG</Label>
                        <Label>TAG</Label>
                      </Item.Extra>

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
  };
}



/*
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
