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
    var { categories } = this.state;
    var selectCategoryClass = category =>
      this.isSelected(category) ? categorySelectedStyle : categoryStyle;
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
            style={selectCategoryClass(category)}
            onClick={() => this.props.selectCategory(category)}
          >
            <Header as="h4" image={category.image} content={category.name} />
          </List.Item>
        ))}
      </List>
    );
  };

  /* ================================ LOGIC ================================ */
  isSelected = category => {
    return this.props.selectedCategories.includes(category);
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
