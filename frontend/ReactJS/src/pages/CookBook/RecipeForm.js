import React, { useState, useEffect, useRef } from 'react';
import { CgCloseO } from 'react-icons/cg';

import GradientButton from '../../components/GradientButton';
import api from '../../services/api';
import WarnError from '../../utils/Errors/warnError';
import nationalities, { getNationality } from '../../utils/nationalities';
import Notificate from '../../utils/Notification';

import {
  Container,
  CloseButton,
  TextualData,
  ImageHeaderContainer,
  Input,
  Select,
  TextArea,
  NumberInput,
  FormRow,
  InputContainer,
  FormInputContainer,
  MultipleEntityContainer,
} from './recipeFormStyles';

const NewRecipe = ({ match }) => {
  const { recipeID } = match.params;

  const [image, setImage] = useState(
    'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
  );
  const [title, setTitle] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [serves, setServes] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [cookingMethod, setCookingMethod] = useState([]);
  const [cuisine, setCuisine] = useState('American');

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await api.get(`/recipes/${recipeID}`);
        const { data: recipe } = response;
        if (!recipe)
          throw new WarnError(
            "Sorry, we didn't find this recipe. Please try again later.",
          );
        setTitle(recipe.name);
        setCuisine(recipe.cuisine[0]);
        setCookingMethod(recipe.cooking_method);
        setIngredients(recipe.ingredients);
        setImage(recipe.image);
        setPrepTime(recipe.prep_time);
        setServes(recipe.serves);
      } catch (err) {
        const error = err.response ? err.response.data.message : err.message;
        if (err instanceof WarnError) Notificate(err.message, 'warn');
        else
          Notificate(
            `An error occurred during fetching your recipe: ${error}`,
            'error',
          );
      }
    };

    if (recipeID) fetchRecipe();
  }, []);

  const handleImage = (event) => {};
  const handleTitle = (newTitle) => {
    setTitle(newTitle);
  };

  const handlePrepTime = (newPrepTime) => {
    setPrepTime(newPrepTime);
  };

  const handleServes = (newServes) => {
    setServes(newServes);
  };

  const handleIngredients = ({ index, ingredient }) => {
    if (index === -1) {
      setIngredients((curr) => [...curr, ingredient]);
    } else if (ingredient) {
      setIngredients((curr) =>
        curr.map((currentIngredient, i) =>
          i === index ? ingredient : currentIngredient,
        ),
      );
    } else {
      setIngredients((curr) => curr.filter((_, i) => i !== index));
    }
  };

  const handleCookingMethod = ({ index, step }) => {
    if (index === -1) {
      setCookingMethod((curr) => [...curr, step]);
    } else if (step.trim()) {
      setCookingMethod((curr) =>
        curr.map((currentStep, i) => (i === index ? step : currentStep)),
      );
    } else {
      setCookingMethod((curr) => curr.filter((_, i) => i !== index));
    }
  };

  const handleCuisine = (newValue) => {
    setCuisine(newValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const body = {
      image,
      name: title,
      prep_time: prepTime,
      serves,
      ingredients,
      cooking_method: cookingMethod,
      cuisine: [getNationality(cuisine).code],
      tags: [],
    };

    try {
      let response;

      if (recipeID) response = await api.put(`/recipes/${recipeID}`, body);
      else response = await api.post('/recipes', body);

      Notificate('Yay, your recipe was created!', 'success');
    } catch (err) {
      const error = err.response ? err.response.data.message : err.message;
      Notificate(
        `An error occurred during your recipe creation: ${error}`,
        'error',
      );
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <CloseButton>
        <CgCloseO />
      </CloseButton>
      <ImageHeader value={image} onChange={handleImage} />
      <TextualData>
        <NameInput value={title} onChange={handleTitle} />

        <FormRow>
          <ServesInput value={serves} onChange={handleServes} />
          <PrepTimeInput value={prepTime} onChange={handlePrepTime} />
        </FormRow>

        <CuisineInput value={cuisine} onChange={handleCuisine} />
        <IngredientsInput value={ingredients} onChange={handleIngredients} />
        <CookingMethodInput
          value={cookingMethod}
          onChange={handleCookingMethod}
        />

        {/* <TagsInput /> */}

        <GradientButton type="submit" block>
          Save recipe
        </GradientButton>
      </TextualData>
    </Container>
  );
};

const ImageHeader = ({ value, onChange }) => {
  return <ImageHeaderContainer src={value} />;
};

const NameInput = ({ value, onChange, ...props }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormInputContainer>
      <label htmlFor="recipe-name">Title</label>
      <Input
        id="recipe-name"
        value={value}
        onChange={handleChange}
        {...props}
      />
    </FormInputContainer>
  );
};

const ServesInput = ({ value, onChange, ...props }) => {
  const handleChange = (event) => {
    if (/^\d*$/.test(event.target.value) && Number(event.target.value) <= 9000)
      onChange(Number(event.target.value));
  };

  return (
    <FormInputContainer>
      <label htmlFor="recipe-serves">Serves amount</label>
      <Input
        id="recipe-serves"
        value={value}
        onChange={handleChange}
        {...props}
      />
    </FormInputContainer>
  );
};

const PrepTimeInput = ({ value, onChange, ...props }) => {
  const handleChange = (event) => {
    if (/^\d*$/.test(event.target.value)) onChange(Number(event.target.value));
  };

  return (
    <FormInputContainer>
      <label htmlFor="recipe-prep-time">Preparation time</label>
      <InputContainer appendedText="min">
        <NumberInput
          id="recipe-prep-time"
          value={value}
          onChange={handleChange}
          {...props}
        />
      </InputContainer>
    </FormInputContainer>
  );
};

const CuisineInput = ({ value, onChange }) => {
  const [isNewCuisine, setIsNewCuisine] = useState(false);

  const handleSelectChange = (event) => {
    if (!isNewCuisine && event.target.value === 'new cuisine') {
      onChange('');
      setIsNewCuisine(true);
    } else {
      setIsNewCuisine(false);
      onChange(event.target.value);
    }
  };

  return (
    <FormInputContainer>
      <label htmlFor="cuisine-input">Cuisine</label>
      <Input
        id="cuisine-input"
        value={value}
        onChange={handleSelectChange}
        list="nationalities"
      />
      <datalist id="nationalities">
        {Object.values(nationalities).map((cuisine) => (
          <option key={cuisine.code} value={cuisine.nationality}>
            {cuisine.code}
          </option>
        ))}
      </datalist>
    </FormInputContainer>
  );
};

const IngredientsInput = ({ value: ingredients, onChange }) => {
  const lastIngredientRef = useRef(null);
  const [lastIngredientData, setLastIngredientData] = useState('');

  const handleIngredient = (event, index = ingredients.length) => {
    const { value } = event.target;

    onChange({ index, ingredient: value });
  };

  const handleLastIngredient = (event) => {
    const { value } = event.target;
    setLastIngredientData(value);
  };

  const handleLastIngredientBlur = (event) => {
    const { value } = event.currentTarget;

    if (value.trim()) {
      onChange({ index: -1, ingredient: value });

      if (lastIngredientRef.current) {
        lastIngredientRef.current.focus();
      }
    }
    setLastIngredientData('');
  };

  return (
    <MultipleEntityContainer>
      <label>Ingredients</label>
      {ingredients.map((ingredient, index) => (
        // I tried using ingredient's name as a key, but it was losing focus when rerendering
        <InputContainer
          block
          prependedText={`#${index + 1}`}
          key={`ingredient#${index + 1}`}
        >
          <Input
            value={ingredient}
            onChange={(event) => handleIngredient(event, index)}
          />
        </InputContainer>
      ))}
      <InputContainer block prependedText={`#${ingredients.length + 1}`}>
        <Input
          ref={lastIngredientRef}
          value={lastIngredientData}
          onChange={handleLastIngredient}
          onBlur={handleLastIngredientBlur}
        />
      </InputContainer>
    </MultipleEntityContainer>
  );
};

const CookingMethodInput = ({ value: cookingMethod, onChange }) => {
  const lastStepRef = useRef(null);
  const [lastStepData, setLastStepData] = useState('');

  const handleStep = (event, index = cookingMethod.length) => {
    const { value } = event.target;

    onChange({ index, step: value });
  };

  const handleLastStep = (event) => {
    const { value } = event.target;
    setLastStepData(value);
  };

  const handleLastStepBlur = (event) => {
    const { value } = event.currentTarget;

    if (value.trim()) {
      onChange({ index: -1, step: value });

      if (lastStepRef.current) {
        lastStepRef.current.focus();
      }
    }
    setLastStepData('');
  };

  return (
    <MultipleEntityContainer>
      <label>Cooking method</label>
      {cookingMethod.map((step, index) => (
        // I tried using steps's name as a key, but it was losing focus when rerendering
        <InputContainer
          block
          textarea
          prependedText={`#${index + 1}`}
          key={`step#${index + 1}`}
        >
          <TextArea
            draggable={false} // TODO: Add a drag and drop logic
            value={step}
            onChange={(event) => handleStep(event, index)}
          />
        </InputContainer>
      ))}
      <InputContainer
        block
        textarea
        prependedText={`#${cookingMethod.length + 1}`}
      >
        <TextArea
          ref={lastStepRef}
          rows={5}
          value={lastStepData}
          onChange={handleLastStep}
          onBlur={handleLastStepBlur}
        />
      </InputContainer>
    </MultipleEntityContainer>
  );
};

export default NewRecipe;
