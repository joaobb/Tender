import React from 'react';

import {
  Container,
  RecipesContainer,
  RecipeContainer,
  Preview,
  Title,
  Cuisine,
} from './styles';

const TENDER_LOGO = 'https://i.imgur.com/JlIc6wO.png';

const RecipesSidebar = ({ recipes, selectedRecipe }) => (
  <Container>
    <RecipesContainer>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe._id}
          id={recipe._id}
          name={recipe.name}
          image={recipe.image}
          origin={recipe.origin}
          isActive={selectedRecipe === recipe._id}
        />
      ))}
    </RecipesContainer>

    <Recipe
      isCreate
      name="New Recipe"
      image={TENDER_LOGO}
      isActive={selectedRecipe === -1}
    />
  </Container>
);

const Recipe = ({
  isCreate,
  id = '',
  name = '',
  image = '',
  origin = '',
  isActive,
  onSelect,
}) => (
  <RecipeContainer
    to={`/cookbook/${id}`}
    isCreate={isCreate}
    value={id}
    isActive={isActive}
    onClick={onSelect}
  >
    <Preview src={image} />
    <Title>{name}</Title>
    <Cuisine origin={origin} />
  </RecipeContainer>
);

export default RecipesSidebar;
