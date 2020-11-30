import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { GrAddCircle } from 'react-icons/gr';
import { useHistory } from 'react-router-dom';

import { DotLink, DotButton } from '../../../../components/DotStuff';
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
} from './styles';

const RecipesSidebar = ({
  canCreate,
  recipes,
  seeAll,
  creations,
  selectedRecipe,
  onSeeAll,
}) => {
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
        {canCreate && (
          <DotLink
            isActive={selectedRecipe === 'new'}
            href="/cookbook/new"
            title="Create new recipe"
            togglelable
            icon={<GrAddCircle />}
          />
        )}
        {canCreate && (
          <DotButton
            isActive={seeAll}
            title="See my creations"
            onClick={onSeeAll}
            icon={seeAll ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          />
        )}
        <Filter
          block={!canCreate}
          name={nameFilter}
          origin={originFilter}
          onChange={handleFilters}
        />
      </header>
      {seeAll && (
        <Container fullSize={!seeAll}>
          <RecipesContainer>
            {creations.map((recipe) =>
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
      )}

      <Container fullSize={!seeAll}>
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

export default RecipesSidebar;
