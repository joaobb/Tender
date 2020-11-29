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

export const Messages = styled.ul`
  margin-left: 10px;
  list-style: none;
  width: -webkit-fill-available;
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export const MessageContainer = styled.li`
  position: relative;
  color: #2c2c2c;
  font-size: ${({ isTitle }) => (isTitle ? '1.8rem' : 'initial')};
  font-weight: ${({ isTitle }) => (isTitle ? 'bold' : 'initial')};

  background-color: #f0f0f0;
  padding: ${({ isTitle }) => (isTitle ? '12px' : '8px')} 20px;

  width: fit-content;

  &:not(:first-child) {
    max-width: calc(64% - ${({ size }) => Math.round(size * 0.05)}ch);
  }

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

export const OptionsContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: calc(100% + 5px);
  top: 50%;
  transform: translateY(-50%);

  padding: 4px;
  border: none;
  border-radius: 50%;
`;
