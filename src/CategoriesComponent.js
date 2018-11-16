import React, { Component } from 'react';
import { List, Card, Header } from 'semantic-ui-react';

/* ================================ CONFIGURATION ================================ */
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

class CategoriesComponent extends Component {
  /* ================================ DECLARATIONS ================================ */
  state = {
    selectedCategories: [],
    categories: categories,
  };

  /* ================================ RENDER ================================ */
  render() {
    return (
      <Card style={categoriesCardStyle}>
        <Card.Content>
          <Card.Header textAlign="center">Categorias</Card.Header>
        </Card.Content>
        <Card.Content>{this.renderCategoriesList()}</Card.Content>
      </Card>
    );
  }

  renderCategoriesList = () => {
    var { categories, selectedCategories } = this.state;
    var isSelected = category => selectedCategories.includes(category);
    return (
      <List
        animated
        selection
        verticalAlign="middle"
        style={categoriesListStyle}
      >
        {categories.map(category => (
          <List.Item
            key={category.name}
            style={isSelected(category) ? categorySelectedStyle : categoryStyle}
            onClick={() => this.selectCategory(category)}
          >
            <Header as="h4" image={category.image} content={category.name} />
          </List.Item>
        ))}
      </List>
    );
  };

  /* ================================ LOGIC ================================ */
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

/* ================================ STYLES ================================ */
var categoriesCardStyle = {
  margin: '10px',
};
var categoriesListStyle = {
  margin: '5px',
};
var categoryStyle = {
  margin: '5px',
};
var categorySelectedStyle = {
  ...categoryStyle,
  background: 'rgba(2, 172, 172, 0.1)',
};

export default CategoriesComponent;
