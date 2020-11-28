import styled, { keyframes } from 'styled-components';

const cardChange = keyframes`
  from {
		bottom: 110px;
		opacity: 20%;
  }
	
  to {
		opacity: 100%;
		bottom: 100px;
  }
	`;

const completeSwipeRight = keyframes`
  from {
		opacity: 100%;
  }
	
  to {
		opacity: 0%;
		transform: rotate(120deg);
  }
	`;

const completeSwipeLeft = keyframes`
  from {
		opacity: 100%;
  }
	
  to {
		opacity: 0%;
		transform: rotate(-120deg);
  }
`;

const wokMove = keyframes`
 0% { transform: rotate(0deg); }
 33% { transform: rotate(-30deg); }
 66% { transform: rotate(30deg); }
 100% { transform: rotate(0deg); }
 `;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;

  overflow: hidden;
  background: #ccceb9;
`;

export const Drag = styled.div`
  z-index: ${({ position }) => 100 - position};

  background: #f6fbfd;
  height: 600px;
  width: 350px;

  border-radius: 30px;

  position: absolute;

  bottom: ${({ position }) => position * 5 + 100}px;
  animation: ${({ isActive }) => (isActive ? cardChange : 'none')} 200ms
    cubic-bezier(0, 0.35, 0.7, 1.1);

  filter: blur(${({ position }) => 0.5 * position}px);

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  transition: ${({ hasTransition }) =>
    hasTransition ? 'all 300ms ease' : 'none'};

  &.complete-swipe--right {
    transform-origin: bottom right !important;
    animation: ${completeSwipeRight} 500ms cubic-bezier(0, 0.35, 0.7, 1.1)
      forwards;
  }
  &.complete-swipe--left {
    transform-origin: bottom left !important;
    animation: ${completeSwipeLeft} 500ms cubic-bezier(0, 0.35, 0.7, 1.1)
      forwards;
  }

  &:hover {
    cursor: ${({ isGrabbing }) => (isGrabbing ? 'grabbing' : 'grab')};
  }

  ${({ isActive, initialRotation }) =>
    !isActive && `transform: rotate(${initialRotation}deg)`};

  @media screen and (max-width: 590px) {
    width: 300px;
    height: 450px;
  } ;
`;

export const CardsContainer = styled.div`
  width: 350px;
  height: calc(100% - 94px);

  position: relative;

  @media screen and (max-width: 590px) {
    width: 300px;
    height: calc(100% - 154px);
  } ;
`;

const ActionButton = styled.button`
  border-radius: 50%;
  border: none;

  height: 64px;
  width: 64px;
  outline: none !important;

  transition: all 600ms cubic-bezier(0, 0.35, 0.7, 1.1);
`;

export const LikeButton = styled(ActionButton)`
  margin-left: 10px;

  &:active {
    animation: ${wokMove} 800ms cubic-bezier(0, 0.35, 0.7, 1.1);
  }
  background-color: rgba(211, 47, 45, 0.1);

  &:hover {
    transition-duration: 200ms;
    box-shadow: rgba(211, 47, 45, 0.3) 0px 0px 10px;
    filter: brightness(1.05);

    background-color: rgba(242, 146, 43, 0.5);
  }
`;

export const PassButton = styled(ActionButton)`
  margin-right: 10px;

  animation: ${wokMove} 800ms cubic-bezier(0, 0.35, 0.7, 1.1);
  animation-play-state: ${({ active }) => (active ? 'running' : 'paused')};

  background-color: rgba(0, 0, 0, 0.1);

  font-size: 2em;
  line-height: 0;
  &:hover {
    transition-duration: 200ms;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
    filter: brightness(1.05);

    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const ImageContainer = styled.div.attrs({
  className: 'recipe__image',
})`
  border-radius: 30px 30px 0 0;

  height: 420px;
  width: 100%;

  overflow: hidden;
  max-width: 100%;
  background: ${({ src }) => `url(${src}) no-repeat center center`};
  background-size: cover;
`;

export const DataContainer = styled.div.attrs({
  className: 'recipe__data',
})`
  height: 180px;
  width: 100%;

  border-radius: 0 0 30px 30px;
  background: white;
  padding: 10px 20px 25px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  * {
    font-family: 'Encode Sans', sans-serif;
  }
`;

export const Header = styled.header.attrs({
  className: 'recipe__header',
})`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    height: 24px;
    transition: filter 200ms ease-in-out;

    &:hover {
      filter: brightness(1.1);
    }
  }
`;

export const Title = styled.span.attrs({
  className: 'header__title',
})`
  margin-right: 5px;
  font-weight: bold;
  font-size: 22px;
`;

export const PrepInfo = styled.div.attrs({
  className: 'recipe__prep-info',
})`
  display: flex;
  justify-content: space-between;

  font-weight: 600;
  font-size: 15px;
`;

export const Serves = styled.span``;
export const PrepTime = styled.span`
  display: flex;
  align-content: center;

  svg {
    margin-right: 3px;
  }
`;

export const TagsContainer = styled.div.attrs({
  className: 'recipe__tags',
})`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.span.attrs({
  className: 'tags__tag',
})`
  color: #5d5d5d;
  font-size: 13px;
  white-space: nowrap;

  background-color: #f5f5f5;
  border-radius: 5px;
  margin: 2px;
  padding: 2px 5px;

  transition: background-color 300ms ease-out;

  &:hover {
    cursor: default;
    background-color: #efefef;
  }
`;

export const RecipeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  margin: auto 10px 15px;
  width: 350px;
`;
