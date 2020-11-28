import styled from 'styled-components';

export const Container = styled.button`
  background-color: transparent;

  border: 3px solid #f0f0f0;
  border-radius: 50%;
  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 100ms ease-out;

  svg {
    font-size: 20px;
  }

  &:hover {
    border-color: #eb7a38;
    background-color: #fafafa;
  }

  ${({ active }) =>
    active ? { borderColor: '#eb7a38', backgroundColor: '#fafafa' } : ''}
`;
