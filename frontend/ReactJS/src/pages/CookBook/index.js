import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import api from '../../services/api';
import Notificate from '../../utils/Notification';

import Recipe from './components/Recipe';
import RecipeForm from './components/RecipeForm';
import RecipesSidebar from './components/RecipesSidebar';
import { Container } from './styles';

const CookBook = () => {
  const history = useHistory();
  const { id: recipeID } = useParams();

  const [recipes, setRecipes] = useState([]);

  const isNew = recipeID === 'new';

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await api.get(`/account/cookbook`);
        const { likedRecipes } = response.data.recipes;

        setRecipes(likedRecipes);

        if (!recipeID && likedRecipes.length > 0)
          history.push(`/cookbook/${likedRecipes[0]._id}`);
      } catch (err) {
        Notificate(
          "Oh no! We couldn't find your cookbook, let me look under the bed.",
          'warn',
        );
      }
    };

    fetchRecipes();
  }, []);

  return (
    <Container>
      <RecipesSidebar recipes={recipes} selectedRecipe={recipeID} />
      {!isNew ? <Recipe /> : <RecipeForm />}
    </Container>
  );
};

export default CookBook;
