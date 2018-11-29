import React, { Component } from 'react';
import { List, Card, Header } from 'semantic-ui-react';
import { categories } from './CategoryData';

/* ================================ CONFIGURATION ================================ */

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
          <Card.Header textAlign="center">Areas</Card.Header>
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
            key={category.value}
            style={selectCategoryClass(category.value)}
            onClick={() => this.props.selectCategory(category.value)}
          >
            <Header as="h4" image={category.image} content={category.text} />
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
