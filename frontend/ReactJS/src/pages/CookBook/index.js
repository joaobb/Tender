import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import Notificate from '../../utils/Notification';

import SelectedRecipeContext from './contexts/selectedRecipe';
import Recipe from './components/Recipe';
import RecipesSidebar from './components/RecipesSidebar';

import { Container } from './styles';

const CookBook = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await api.get(`/account/cookbook`);

        setRecipes(response.data.recipes.likedRecipes);
      } catch (err) {
        Notificate(
          "Oh no! We couldn't find your cookbook, let me look under the bed.",
          'warn',
        );
      }
    };

    fetchRecipes();
  }, []);

  const selectedRecipeObj = recipes.filter(
    (recipe) => recipe._id === selectedRecipe,
  )[0];

  return (
    <SelectedRecipeContext.Provider
      value={{ selected: selectedRecipe, setSelected: setSelectedRecipe }}
    >
      <Container>
        <RecipesSidebar recipes={recipes} />
        <Recipe recipe={selectedRecipeObj} />
      </Container>
    </SelectedRecipeContext.Provider>
  );
};

export default CookBook;
