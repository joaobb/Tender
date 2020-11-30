import React, { useState, useEffect } from 'react';
import { IoSend } from 'react-icons/io5';
import { useHistory, useParams } from 'react-router-dom';

import Loader from '../../../../assets/Loader';
import { ImageInput } from '../../../../components/Inputs';
// import Tags from '../../../../components/Tags';
import RecipeFormContext from '../../../../contexts/recipeFormContext';
import api from '../../../../services/api';
import useFetch from '../../../../services/swr';
import WarnError from '../../../../utils/Errors/warnError';
import nationalities, { getNationality } from '../../../../utils/nationalities';
import Notificate from '../../../../utils/Notification';
import toBase64 from '../../../../utils/toBase64';
import CookingMethod from '../CookingMethod';

import {
  initialBasics,
  initialEdition,
  initialImage,
  TARGET,
  SERVES_UNITS,
  PREPTIME_UNITS,
} from './initials';
import {
  Container,
  SmallInput,
  SmallSelect,
  Image,
  Title,
  RecipeBasics,
  Header,
  MessageWriterContainer,
  MessageInput,
  SendButton,
  Label,
  DualInputContainer,
  LeftSideContainer,
  ImageContainer,
  SubmitButton,
} from './styles';

const RecipeForm = () => {
  const { id: recipeID } = useParams();
  const history = useHistory();

  const [basics, setBasics] = useState(initialBasics);
  const [image, setImage] = useState(initialImage);
  const [ingredients, setIngredients] = useState([]);
  const [cookingMethod, setCookingMethod] = useState([]);
  const [tags, setTags] = useState([]);

  const [edition, setEdition] = useState(initialEdition);

  const isNew = recipeID === 'new';

  const { data, mutate } = useFetch(!isNew ? `/recipes/${recipeID}` : '');

  useEffect(() => {
    if (data) {
      setBasics((prev) => ({
        ...prev,
        name: data.name,
        serves: {
          value: Number(data.serves.split(' ')[0]),
          unit: data.serves.split(' ')[1],
        },
        prepTime: {
          value: Number(data.prep_time.split(' ')[0]),
          unit: data.prep_time.split(' ')[1],
        },
        cuisine: getNationality(data.cuisine[0])?.nationality,
      }));

      setImage((prev) => ({ ...prev, url: data.image }));

      setCookingMethod(data.cooking_method);
      setIngredients(data.ingredients);
      setTags(data.tags);
    }
  }, [data]);

  const handleDualInput = ({ master, name, value }) => {
    if (Number(value) < 0) return;

    setBasics((prev) => ({
      ...prev,
      [master]: {
        ...prev[master],
        [name]: value,
      },
    }));
  };

  const handleBasics = (event) => {
    const { name, value } = event.target;

    setBasics((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSend = ({ target, value }) => {
    if (target === TARGET.INGREDIENTS)
      setIngredients((prev) => [...prev, value]);
    else setCookingMethod((prev) => [...prev, value]);
  };

  const handleEditClick = ({ type, index }) => {
    setEdition({
      active: true,
      index,
      target: type,
      message:
        type === 'ingredients' ? ingredients[index] : cookingMethod[index],
    });
  };

  const handleEdition = ({ message }) => {
    if (edition.target === 'ingredients')
      setIngredients((prev) =>
        prev.map((ingredient, index) =>
          index === edition.index ? message : ingredient,
        ),
      );
    else
      setCookingMethod((prev) =>
        prev.map((direction, index) =>
          index === edition.index ? message : direction,
        ),
      );

    setEdition(initialEdition);
  };

  const handleRemove = ({ type, index }) => {
    if (type === 'ingredients')
      setIngredients((prev) => prev.filter((_, i) => index !== i));
    else if (type === 'directions')
      setCookingMethod((prev) => prev.filter((_, i) => index !== i));
  };

  const handleImage = ({ url, file }) => {
    setImage({
      url,
      file,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!ingredients.length)
        throw new WarnError("I'm guessing you forgot the ingredients, right?");
      if (!cookingMethod.length)
        throw new WarnError("I'm guessing you forgot the directions, right?");

      if (!basics.name.trim())
        throw new WarnError("Aren't you going name this tasty boi?");

      if (!image.url)
        throw new WarnError(
          'Uuuuh, a mysterious meal. What about inserting image about it?',
        );

      const imageURL = image.file ? await toBase64(image.file) : undefined;

      const body = {
        name: basics.name,
        cuisine: basics.cuisine,
        ingredients,
        image: imageURL,
        cooking_method: cookingMethod,
        prep_time: `${basics.prepTime.value} ${basics.prepTime.unit}`,
        serves: `${basics.serves.value} ${basics.serves.unit}`,
        tags,
      };

      let response = {};

      if (isNew) response = await api.post('/recipes', body);
      else response = await api.put(`/recipes/${recipeID}`, body);

      mutate((prev) => ({ ...prev, ...response.data }));

      Notificate(`Nice! Go check your recipe.`, 'error');
      history.push(`/cookbook/${response.data._id}`);
    } catch (err) {
      if (err instanceof WarnError) Notificate(err.message, 'success');
      else {
        const error = err.response.data.message;
        Notificate(`An error occurred during login: ${error}`, 'error');
      }
    }
  };

  const isLoading = !isNew && !data;

  return (
    <RecipeFormContext.Provider
      value={{
        isEditable: true,
        onEdit: handleEditClick,
        onRemove: handleRemove,
      }}
    >
      <Container onSubmit={handleSubmit}>
        {!isLoading ? (
          <>
            <LeftSideContainer>
              <CookingMethod method={cookingMethod} ingredients={ingredients} />
              <MessageWriter
                isEdition={edition.active}
                value={edition.message}
                onEdit={handleEdition}
                onSend={handleSend}
              />
            </LeftSideContainer>
            <RecipeBasics>
              <ImageContainer>
                <Image src={image.url} />
                <ImageInput url={image.url} onFileUpload={handleImage} />
              </ImageContainer>
              <Header>
                <div>
                  <Title
                    placeholder="Name"
                    name="name"
                    value={basics.name}
                    onChange={handleBasics}
                  />
                  <SmallInput
                    name="cuisine"
                    value={basics.cuisine}
                    onChange={handleBasics}
                    list="nationalities"
                  />
                  <datalist id="nationalities">
                    {Object.values(nationalities).map((cuisine) => (
                      <option key={cuisine.code} value={cuisine.nationality}>
                        {cuisine.code}
                      </option>
                    ))}
                  </datalist>
                </div>
                <div>
                  <DualInput
                    master="prepTime"
                    name1="value"
                    name2="unit"
                    value1={basics.prepTime.value}
                    value2={basics.prepTime.unit}
                    onChange={handleDualInput}
                    options={PREPTIME_UNITS}
                  />
                  <DualInput
                    master="serves"
                    name1="value"
                    name2="unit"
                    value1={basics.serves.value}
                    value2={basics.serves.unit}
                    onChange={handleDualInput}
                    options={SERVES_UNITS}
                  />
                </div>
              </Header>
              <hr />
              {/* <Tags tags={tags} /> */}
              <div className="centralized">
                <SubmitButton type="submit">{`${
                  isNew ? 'Create' : 'Update'
                } Recipe`}</SubmitButton>
              </div>
            </RecipeBasics>
          </>
        ) : (
          <Loader />
        )}
      </Container>
    </RecipeFormContext.Provider>
  );
};

const ENTER_KEY_CODE = 13;

const MessageWriter = ({ value, isEdition, onEdit, onSend }) => {
  const [target, setTarget] = useState(TARGET.INGREDIENTS);
  const [localValue, setLocalValue] = useState('');

  useEffect(() => {
    if (isEdition) setLocalValue(value);
  }, [isEdition]);

  const handleTarget = (event) => {
    setTarget(Number(event.target.value));
  };

  const handleChange = (event) => {
    setLocalValue(event.target.value);
  };

  const handleSend = () => {
    if (localValue.trim()) {
      if (!isEdition) onSend({ target, value: localValue });
      else onEdit({ message: localValue });
      setLocalValue('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <MessageWriterContainer>
      <Label isActive={target === TARGET.INGREDIENTS} title="Add Ingredient">
        <input
          type="radio"
          name="target"
          value={TARGET.INGREDIENTS}
          onChange={handleTarget}
        />
        I
      </Label>

      <Label isActive={target === TARGET.DIRECTIONS} title="Add Direction">
        <input
          type="radio"
          name="target"
          value={TARGET.DIRECTIONS}
          onChange={handleTarget}
        />
        D
      </Label>

      <MessageInput
        value={localValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <SendButton type="button" onClick={handleSend}>
        <IoSend />
      </SendButton>
    </MessageWriterContainer>
  );
};

const DualInput = ({
  master,
  name1,
  name2,
  value1 = '',
  value2 = '',
  onChange,
  options,
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;

    onChange({ master, name, value });
  };
  return (
    <DualInputContainer>
      <SmallInput
        mini
        name={name1}
        value={value1}
        onChange={handleChange}
        type="number"
        min={0}
      />
      <SmallSelect name={name2} value={value2} onChange={handleChange}>
        {options.map((option, i) => (
          <option key={`${option}-option#${i + 1}`} value={option}>
            {option}
          </option>
        ))}
      </SmallSelect>
    </DualInputContainer>
  );
};

export default RecipeForm;
