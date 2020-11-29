import styled from 'styled-components';

export const Container = styled.button`
  position: relative;
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

export const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  width: 200px;
  padding: 12px 40px 12px 16px;
`;

export const Name = styled.strong`
  font-size: 16px;
`;

export const Small = styled.small`
  color: #5d6467;
  font-size: 0.8rem;
`;
