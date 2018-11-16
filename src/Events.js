import React, { Component } from 'react';
import { Grid, List, Card, Header } from 'semantic-ui-react';
import ShowEventsComponent from './ShowEvents';

var categories = [
  {
    name: 'Ciencias',
    image:
      'http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Science-icon.png',
  },
  {
    name: 'Humanidades',
    image:
      'https://www.everettcc.edu/files/programs/pathways/gp-humanities_large.png',
  },
  {
    name: 'Filosofia',
    image:
      'https://banner2.kisspng.com/20180424/thw/kisspng-computer-icons-creativity-consultant-brainstorming-philosophy-5adf52d09fdee1.4882188915245851686548.jpg',
  },
];

var eventsContainerClass = {
  width: '80%',
  margin: '0px auto',
  background: '#F7F8FA',
  minHeight: 'calc(100% - 65px)',
};

var categoriesCardClass = {
  margin: '10px',
};

var categoriesListClass = {
  margin: '5px',
};

var categoryClass = {
  margin: '5px',
};
var categorySelectedClass = {
  ...categoryClass,
  background: 'rgba(2, 172, 172, 0.1)',
};

class EventsComponent extends Component {
  state = {
    selectedCategories: [],
    categories: categories,
  };

  render() {
    return (
      <div style={eventsContainerClass}>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            {/* Categories */}
            {this.renderCategories()}

            {/* Events */}
            <Grid.Column width={11}>
              <ShowEventsComponent />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }

  renderCategories = () => {
    return (
      <Grid.Column width={5} textAlign="left">
        <Card style={categoriesCardClass}>
          <Card.Content>
            <Card.Header textAlign="center">Categorias</Card.Header>
          </Card.Content>
          <Card.Content>{this.renderCategoriesList()}</Card.Content>
        </Card>
      </Grid.Column>
    );
  };

  renderCategoriesList = () => {
    var { categories, selectedCategories } = this.state;
    var isSelected = category => selectedCategories.includes(category);
    return (
      <List
        animated
        selection
        verticalAlign="middle"
        style={categoriesListClass}
      >
        {categories.map(category => (
          <List.Item
            style={isSelected(category) ? categorySelectedClass : categoryClass}
            onClick={() => this.selectCategory(category)}
          >
            <Header as="h4" image={category.image} content={category.name} />
          </List.Item>
        ))}
      </List>
    );
  };

  selectCategory = category => {
    var { selectedCategories } = this.state;
    if (!selectedCategories.includes(category)) {
      var newCategories = [...selectedCategories, category];
      this.setState({ selectedCategories: newCategories });
    } else {
      var otherCategories = selectedCategories.filter(x => x !== category);
      this.setState({
        selectedCategories: otherCategories,
      });
    }
  };
}

export default EventsComponent;
