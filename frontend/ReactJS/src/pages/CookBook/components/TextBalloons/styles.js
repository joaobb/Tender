import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  font-family: 'Raleway', sans-serif;

  img:first-child {
    border-radius: 50%;
    background-color: #f0f0f0;
    padding: 10px;

    box-shadow: inset 0 4px 8px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export const MessageContainer = styled.li`
  color: #2c2c2c;
  font-size: ${({ isTitle }) => (isTitle ? '1.8rem' : 'initial')};
  font-weight: ${({ isTitle }) => (isTitle ? 'bold' : 'initial')};

  background-color: #f0f0f0;
  padding: ${({ isTitle }) => (isTitle ? '12px' : '8px')} 20px;

  width: fit-content;

  border-radius: 8px 20px 20px 20px;

  transition: all 100ms ease-in-out;

  &:first-child {
    border-radius: 8px 20px 20px 8px;
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &:hover {
    background-color: #e9e9e9;
  }
`;

export const Messages = styled.ul`
  margin-left: 10px;

  list-style: none;
`;
