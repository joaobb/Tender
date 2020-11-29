import styled from 'styled-components';

export const Container = styled.form.attrs({ className: 'shadowed' })`
  position: relative;

  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 70%;
  width: -webkit-fill-available;
  border-radius: 30px;

  background-color: white;

  grid-template-areas:
    'ingredientsAndDirections recipeBasics'
    'ingredientsAndDirections recipeBasics';
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  overflow: hidden;
  border-top-right-radius: 30px;

  &::before,
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    content: '';
    background: ${({ src }) => `url('${src}') no-repeat center center`};

    width: 100%;
  }

  &::before {
    filter: blur(5px);
    background-size: cover;
    border-radius: 7px;
  }
  &::after {
    background-size: contain;
  }
`;

export const Header = styled.div`
  * {
    font-family: 'Raleway', sans-serif;
  }

  & > div {
    display: flex;
    align-items: flex-end;

    gap: 12px;
  }
`;

const BaseInput = `
  font-size: 2rem;
  color: #2c2c2c;
  line-height: 1.3125;

  border: none;
  border-bottom: 1px solid #a4a4a4;

  transition: all 300ms ease;
  background-color: white;

  &:hover,
  &:focus {
    border-color: #2c2c2c;
  }
`;

export const Title = styled.input`
  ${BaseInput}

  max-width: 200px;
`;

export const SmallInput = styled(Title)`
  font-size: 1rem;
  width: ${({ mini }) => (mini ? '60px' : '')};
`;

export const SmallSelect = styled.select`
  ${BaseInput}
  font-size: 1rem;
`;

export const Small = styled.input``;

export const RecipeBasics = styled.div`
  grid-area: recipeBasics;
  border-left: 1px solid #e8e8e8;
  max-width: 500px;
  hr {
    border-color: #ffffff54;
  }

  & > div:not(:first-child) {
    padding: 10px 16px;

    & > div {
      margin: 6px;
    }
  }
`;

export const MessageWriterContainer = styled.div`
  grid-area: writingArea;
  background-color: #cdcdcd;

  display: flex;
  align-items: center;

  border-bottom-left-radius: 30px;
  gap: 18px;
  padding: 0 18px;

  height: 80px;

  /* position: absolute;
  bottom: 0;
  right: 0;
  left: 0; */
`;

export const MessageInput = styled.textarea.attrs({ className: 'sscroll' })`
  margin: 10px;
  color: #2c2c2c;

  background-color: white;
  padding: 12px 20px;
  border: none;
  width: -webkit-fill-available;

  border-radius: 20px;

  transition: all 100ms ease-in-out;
`;

export const SendButton = styled.button.attrs({ className: 'toggleable' })`
  border: none;

  &:active {
    box-shadow: inset 0 4px 8px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const Label = styled.label.attrs(({ isActive }) => ({
  className: `toggleable ${isActive ? 'toggleable--active' : ''}`,
}))`
  user-select: none;

  input {
    display: none;
  }
`;

export const LeftSideContainer = styled.div`
  grid-area: ingredientsAndDirections;

  position: relative;
  overflow-y: auto;

  & > div:first-child {
    padding-bottom: 0;
    height: calc(100% - 80px);
  }
`;

export const DualInputContainer = styled.div`
  display: flex;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 70%;
  width: 100%;
`;

export const SubmitButton = styled.button.attrs({ className: 'shadowed' })`
  width: 200px;
  border-radius: 30px;

  font-weight: bold;
  font-size: 1.4rem;
  background-color: white;

  border: none;
  padding: 6px 8px;
`;
