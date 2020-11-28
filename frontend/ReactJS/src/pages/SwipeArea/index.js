import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';

import { ReactComponent as Brazil } from '../../assets/svg/countriesFlags/BRA.svg';
import { ReactComponent as Wok } from '../../assets/svg/wok.svg';
import api from '../../services/api';
import { getRandomNumber } from '../../utils';
import Notificate from '../../utils/Notification';

import {
  Container,
  Drag,
  ImageContainer,
  DataContainer,
  LikeButton,
  PassButton,
  Header,
  Title,
  PrepTime,
  Serves,
  TagsContainer,
  Tag,
  PrepInfo,
  RecipeContainer,
  CardsContainer,
  ActionButtonsContainer,
} from './styles';

const getDeg = (x, y) => -(Math.atan2(x, y) * 180) / Math.PI;

const RECIPE_GOT = {
  WAITING: 0,
  LIKED: 1,
  PASSED: 2,
};

const Tender = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const RECIPES_QTD = 5;
      const response = await api.get(`recipes?qtd=${RECIPES_QTD}`);

      const statedRecipes = response.data.reduce((acc, recipe) => {
        if (!recipes.some((rec) => recipe._id === rec._id))
          acc = [...acc, { ...recipe, state: RECIPE_GOT.WAITING }];
        return acc;
      }, []);

      if (statedRecipes.length)
        setRecipes((curr) => [...curr, ...statedRecipes]);
    };

    if (recipes.length < 3) fetchRecipes();
  }, [recipes.length]);

  const handleSwipe = async (isLike) => {
    const recipe = recipes[0];

    if (isLike) await api.post(`like/${recipe._id}`);
    else await api.post(`pass/${recipe._id}`);
    Notificate(
      `Congratulations, you've matched with ${recipe.name}.`,
      'success',
      'top-center',
      true,
    );

    setRecipes(recipes.slice(1));
  };

  const handleAction = (event) => {
    const { name } = event.currentTarget;
    const newState = name === 'like' ? RECIPE_GOT.LIKED : RECIPE_GOT.PASSED;

    if (recipes.length)
      setRecipes([{ ...recipes[0], state: newState }, ...recipes.slice(1)]);
  };

  return (
    <Container>
      <CardsContainer>
        {recipes.length ? (
          recipes.map((recipe, index) => (
            <Card
              key={recipe._id}
              index={index}
              title={recipe.name}
              image={recipe.image}
              tags={recipe.tags}
              prepTime={recipe.prep_time}
              serves={recipe.serves}
              state={recipe.state}
              isActive={index === 0}
              handleSwipe={handleSwipe}
            />
          ))
        ) : (
          <Card
            index={0}
            title="The Game"
            image={process.env.REACT_APP_LAST_IMAGE}
            tags={['Thank', 'you', 'for', 'using', 'this', 'app']}
            prepTime="42 Minutes"
            serves="2 Cups"
            state={0}
            isActive={false}
            handleSwipe={handleSwipe}
          />
        )}
      </CardsContainer>
      <ActionButtons handleAction={handleAction} />
    </Container>
  );
};

const ActionButtons = ({ handleAction }) => (
  <ActionButtonsContainer>
    <PassButton name="pass" active={false} onClick={handleAction}>
      <GrFormClose />
    </PassButton>
    <LikeButton name="like" active={false} onClick={handleAction}>
      <Wok />
    </LikeButton>
  </ActionButtonsContainer>
);

const Card = ({
  index = 0,
  title = '',
  state,
  isActive = false,
  image,
  tags,
  prepTime,
  serves,
  handleSwipe: handleCardSwipe,
}) => {
  const [touched, setTouched] = useState(false);

  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

  const [mouseDown, _setMouseDown] = useState(false);

  const [hasTransition, setHasTransition] = useState(false);
  const [completeSwipeClassName, setCompleteSwipeClassName] = useState('');

  const [initialRotation] = useState(getRandomNumber());

  const card = useRef(null);
  const currentMouseDowance = useRef(mouseDown);
  const currentCardTouched = useRef(touched);

  const OFFSET_Y = window.innerHeight;
  const OFFSET_X = window.innerWidth / 2;

  const setRotation = ({ y = 0, deg = 0 }) => {
    if (card.current) {
      const deltaY = 100 + (y - initialPosition.y) * 0.2;

      card.current.style.bottom = `${deltaY > 0 ? deltaY : 100}px`;
      card.current.style.transform = `rotate(${deg}deg)`;
      card.current.style.transformOrigin = `bottom ${
        deg > 1 ? 'right' : 'left'
      }`;
    }
  };

  const setMouseDown = (newMouseState) => {
    currentMouseDowance.current = newMouseState;
    currentCardTouched.current = true;

    _setMouseDown(newMouseState);
    setTouched(true);
  };

  const handlePress = (event) => {
    if (!isActive) return;
    setMouseDown(true);

    const x =
      OFFSET_X - (event.touches ? event.touches[0].clientX : event.clientX);
    const y =
      OFFSET_Y - (event.touches ? event.touches[0].clientY : event.clientY);

    setInitialPosition({ x, y });
  };

  const handleSwipe = async (liked) => {
    if (!isActive) return;
    setTouched(true);

    setCompleteSwipeClassName(`complete-swipe--${liked ? 'right' : 'left'}`);

    setTimeout(() => {
      handleCardSwipe(liked);
    }, 600);
  };

  const handleResetCard = (duration = 500) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        currentCardTouched.current = false;

        setCompleteSwipeClassName('');
        setHasTransition(false);
        setInitialPosition((0, 0));
        setTouched(false);
        resolve();
      }, duration),
    );
  };

  const handleUnpress = (event) => {
    if (!isActive) return;
    setMouseDown(false);

    const x =
      OFFSET_X -
      (event.changedTouches ? event.changedTouches[0].clientX : event.clientX);
    const y =
      OFFSET_Y -
      (event.changedTouches ? event.changedTouches[0].clientY : event.clientY);

    const cardRotation = getDeg(x, y);
    setTouched(false);

    // The swipe action is only triggered when the rotation angle is greater than 24deg.
    // Otherwise, it will return to the initial position.
    if (Math.abs(cardRotation) < 24) {
      setRotation({ deg: 0 });
      setHasTransition(true);

      handleResetCard(300);
      setInitialPosition({ x: OFFSET_X, y: OFFSET_Y });
    } else if (cardRotation > 0) {
      handleSwipe(true);
    } else handleSwipe(false);
  };

  const handleCancelEvent = (event) => {
    event.stopPropagation();
    event.preventDefault();
    event.cancelBubble = true;
    event.returnValue = false;
  };

  useEffect(() => {
    if (state !== 0) handleSwipe(state === RECIPE_GOT.LIKED);
  }, [state]);

  useEffect(() => {
    if (!isActive) return;

    // Used when user's mouse leave the card area
    const handleGlobalUnpress = (event) => {
      if (!currentCardTouched.current) return;

      handleUnpress(event);
      setInitialPosition({ x: 0, y: 0 });

      setMouseDown(false);
      _setMouseDown(false);
    };

    document.addEventListener('mouseup', handleGlobalUnpress);
    document.addEventListener('touchend', handleGlobalUnpress);

    return () => {
      document.removeEventListener('mouseup', handleGlobalUnpress);
      document.removeEventListener('touchend', handleGlobalUnpress);
      return undefined;
    };
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;

    const handleMouseMovement = (event) => {
      handleCancelEvent(event);

      if (currentMouseDowance.current) {
        const x = OFFSET_X - event.clientX - initialPosition.x;
        const y = OFFSET_Y - event.clientY;
        const deg = getDeg(x, y);

        setRotation({ y, deg });
      }
    };

    const handleTouchMovement = (event) => {
      handleCancelEvent(event);

      if (currentMouseDowance.current) {
        const x = OFFSET_X - event.touches[0].clientX - initialPosition.x;
        const y = OFFSET_Y - event.touches[0].clientY;
        const deg = getDeg(x, y);

        setRotation({ y, deg });
      }
    };

    // Click
    if (mouseDown) {
      document.addEventListener('mousemove', handleMouseMovement);
      document.addEventListener('touchmove', handleTouchMovement);
    } else {
      document.removeEventListener('mousemove', handleMouseMovement);
      document.removeEventListener('touchmove', handleTouchMovement);

      setInitialPosition({ x: 0, y: 0 });
    }
  }, [isActive, mouseDown]);

  return (
    <Drag
      ref={card}
      position={index}
      isActive={isActive}
      isGrabbing={mouseDown}
      className={completeSwipeClassName}
      hasTransition={hasTransition}
      onMouseDown={handlePress}
      onTouchStart={handlePress}
      initialRotation={initialRotation}
      // onMouseUp={handleUnpress}
      // onTouchEnd={handleUnpress}
    >
      <RecipeCard
        image={image}
        title={title}
        tags={tags}
        serves={serves}
        prepTime={prepTime}
      />
    </Drag>
  );
};

const RecipeCard = ({ image, title, tags, serves, prepTime }) => (
  <RecipeContainer>
    <ImageContainer src={image} />
    <DataContainer>
      <Header>
        <Title>{title}</Title>
        <Brazil />
      </Header>

      <Tags tags={tags} />

      <PrepInfo>
        <Serves>{serves}</Serves>
        <PrepTime>
          <AiOutlineClockCircle /> {prepTime.split(' ')[0]} Mins
        </PrepTime>
      </PrepInfo>
    </DataContainer>
  </RecipeContainer>
);

const Tags = ({ tags }) => (
  <TagsContainer>
    {tags.map((tag) => (
      <Tag key={tag}>{tag}</Tag>
    ))}
  </TagsContainer>
);

export default Tender;
