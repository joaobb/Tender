import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Sidebar = styled.div`
  height: 70%;
  min-width: 300px;

  & > header {
    display: flex;
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  height: calc(100% - 68px);

  display: flex;
  flex-direction: column;

  border-radius: 30px;
  background: white;
  box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.1);
`;

export const RecipesContainer = styled.div.attrs({ className: 'sscroll' })`
  overflow-y: auto;
  border-radius: 30px;
`;

export const RecipeContainer = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 18px;

  padding: 10px 20px;
  width: 100%;
  background-color: transparent;
  border: none;

  text-decoration: none;
  color: #2c2c2c;

  transition: all 100ms ease-in-out;

  ${({ isActive }) =>
    isActive
      ? {
          boxShadow: 'inset 0 4px 8px 4px rgba(0, 0, 0, 0.1);',
        }
      : {}}

  &:hover {
    box-shadow: inset 0 4px 8px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const Preview = styled.img`
  width: 68px;
  height: 68px;

  border-radius: 50%;
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
  text-align: left;
  font-family: 'Raleway', sans-serif;
`;

export const Cuisine = styled.small`
  text-transform: capitalize;
`;

export const NewRecipeContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  color: black;

  height: 48px;
  width: 48px;

  border-radius: 50%;
  /* margin-bottom: 20px; */

  font-size: 1.4rem;

  background-color: white;

  box-shadow: ${({ isActive }) => (isActive ? 'inset' : '')} 0 4px 8px 4px
    rgba(0, 0, 0, 0.1);
`;
