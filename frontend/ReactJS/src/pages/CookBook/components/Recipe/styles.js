import styled from 'styled-components';

export const Container = styled.div.attrs({ className: 'shadowed' })`
  position: relative;

  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 70%;
  width: -webkit-fill-available;
  border-radius: 30px;

  background-color: white;

  grid-template-areas:
    'cookingMethod recipeBasics'
    'cookingMethod recipeBasics';
`;

export const Image = styled.div`
  width: 100%;
  height: 70%;

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
    align-items: center;
    gap: 12px;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #2c2c2c;
  line-height: 1.3125;
`;

export const Small = styled.span``;

export const RecipeBasics = styled.div`
  grid-area: recipeBasics;
  border-left: 1px solid #e8e8e8;

  hr {
    border-color: #ffffff54;
  }

  & > div {
    padding: 10px 16px;
  }
`;
