import React, { useState, useContext } from 'react';
import { GrAddCircle } from 'react-icons/gr';

import UserContext from '../../../../contexts/userContext';
import { getNationality } from '../../../../utils/nationalities';
import Filter from '../Filters';

import {
  Sidebar,
  Container,
  RecipesContainer,
  RecipeContainer,
  Preview,
  Title,
  Cuisine,
  NewRecipeContainer,
} from './styles';

const RecipesSidebar = ({ recipes, selectedRecipe }) => {
  const { canCreate } = useContext(UserContext);

  const [nameFilter, setNameFilter] = useState('');
  const [originFilter, setOriginFilter] = useState('');

  const handleFilters = (filter, value) => {
    if (filter === 'reset') {
      setNameFilter('');
      setOriginFilter('');
    }
    if (filter === 'name') setNameFilter(value);
    else setOriginFilter(value);
  };

  const getIsInFilter = (name = '', origin = '') => {
    const nationality =
      getNationality(originFilter)?.code?.toLowerCase() ?? 'XXX';

    if (!nameFilter && !originFilter) return true;

    const result =
      name.toLowerCase().includes((nameFilter || 'XXX').toLowerCase()) ||
      origin.toLowerCase().includes(nationality);

    return result;
  };

  return (
    <Sidebar>
      <header>
        {canCreate && <NewRecipe isActive={selectedRecipe === 'new'} />}
        <Filter
          block={!canCreate}
          name={nameFilter}
          origin={originFilter}
          onChange={handleFilters}
        />
      </header>
      <Container>
        <RecipesContainer>
          {recipes.map((recipe) =>
            getIsInFilter(recipe.name, recipe.cuisine[0]) ? (
              <Recipe
                key={recipe._id}
                id={recipe._id}
                name={recipe.name}
                image={recipe.image}
                origin={recipe.cuisine[0]}
                isActive={selectedRecipe === recipe._id}
              />
            ) : null,
          )}
        </RecipesContainer>
      </Container>
    </Sidebar>
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

const NewRecipe = ({ isActive }) => (
  <NewRecipeContainer
    to="/cookbook/new"
    isActive={isActive}
    title="Create new recipe"
  >
    <GrAddCircle />
  </NewRecipeContainer>
);

export default RecipesSidebar;
