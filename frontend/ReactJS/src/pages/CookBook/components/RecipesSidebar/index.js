import React, { useContext } from 'react';

import SelectedRecipeContext from '../../contexts/selectedRecipe';

import {
  Container,
  RecipesContainer,
  RecipeContainer,
  Preview,
  Title,
  Cuisine,
} from './styles';

const TENDER_LOGO = 'https://i.imgur.com/JlIc6wO.png';

const RecipesSidebar = ({ recipes }) => {
  const { selected, setSelected } = useContext(SelectedRecipeContext);

  const handleSelect = (event) => {
    const { value } = event.currentTarget;

    setSelected(value);
  };

  const handleCreateNewRecipe = () => {
    setSelected(-1);

    console.log('TOOD: CREATE NEW RECIPE');
  };

  return (
    <Container>
      <RecipesContainer>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe._id}
            id={recipe._id}
            name={recipe.name}
            image={recipe.image}
            origin={recipe.origin}
            isActive={selected === recipe._id}
            onSelect={handleSelect}
          />
        ))}{' '}
        {recipes.map((recipe) => (
          <Recipe
            key={recipe._id}
            id={recipe._id}
            name={recipe.name}
            image={recipe.image}
            origin={recipe.origin}
            isActive={selected === recipe._id}
            onSelect={handleSelect}
          />
        ))}
      </RecipesContainer>

      <Recipe
        isCreate
        name="New Recipe"
        image={TENDER_LOGO}
        isActive={selected === -1}
        onSelect={handleCreateNewRecipe}
      />
    </Container>
  );
};

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
