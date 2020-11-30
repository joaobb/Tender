import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams, useLocation } from 'react-router-dom';

import UserContext from '../../contexts/userContext';
import api from '../../services/api';
import Notificate from '../../utils/Notification';

import Recipe from './components/Recipe';
import RecipeForm from './components/RecipeForm';
import RecipesSidebar from './components/RecipesSidebar';
import { Container } from './styles';

const CookBook = () => {
  const { canCreate } = useContext(UserContext);

  const history = useHistory();
  const { id: recipeID } = useParams();
  const { pathname } = useLocation();

  const [recipes, setRecipes] = useState([]);
  const [myRecipes, setMyRecipes] = useState([]);
  const [seeAll, setSeeAll] = useState(false);

  const goToForm = recipeID === 'new' || pathname?.endsWith('edit');

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

  useEffect(() => {
    const fetchMyRecipes = async () => {
      try {
        const response = await api.get(`/account/creations`);
        const { creations } = response.data.recipes;

        setMyRecipes(creations);
        setSeeAll(true);
      } catch (err) {
        Notificate('Oh no!', 'warn');
      }
    };

    if (canCreate) fetchMyRecipes();
  }, [canCreate]);

  const handleSeeAll = () => setSeeAll(!seeAll);

  return (
    <Container>
      <RecipesSidebar
        canCreate={canCreate}
        recipes={recipes}
        creations={myRecipes}
        seeAll={seeAll}
        selectedRecipe={recipeID}
        onSeeAll={handleSeeAll}
      />
      {!goToForm ? <Recipe /> : <RecipeForm />}
    </Container>
  );
};

export default CookBook;
