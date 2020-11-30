import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BaseDot = `
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  color: black;

  height: 48px;
  width: 48px;

  border-radius: 50%;

  font-size: 1.4rem;

  background-color: white;
`;

export const LinkContainer = styled(Link)`
  ${BaseDot};

  box-shadow: ${({ isActive }) => (isActive ? 'inset' : '')} 0 4px 8px 4px
    rgba(0, 0, 0, 0.1);
`;

export const ButtonContainer = styled.button`
  ${BaseDot};

  border: none;
  box-shadow: ${({ isActive }) => (isActive ? 'inset' : '')} 0 4px 8px 4px
    rgba(0, 0, 0, 0.1);
`;
