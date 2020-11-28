import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;

  display: flex;
  flex-direction: column;

  min-width: 150px;

  background-color: white;

  border-radius: 8px;
  border: 1px solid #f0f0f0;
`;

const BaseItemContainer = `
  color: #0e1e24;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  text-align: left;

  border: none;
  background-color: white;

  padding: 8px 16px;
  transition: all 100ms ease-in-out;
  
  &:last-child {
    border-radius: 0 0 8px 8px;
  }

  &:hover {
    background-color: #eaebec;
  }
`;

export const DropdownItemContainer = styled.div`
  ${BaseItemContainer}
`;

export const DropdownLinkContainer = styled(Link)`
  ${BaseItemContainer}
`;

export const DropdownButtonContainer = styled.button.attrs({
  type: 'button',
})`
  ${BaseItemContainer}
`;
