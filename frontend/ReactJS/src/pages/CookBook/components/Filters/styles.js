import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: ${({ block }) => (block ? '100%' : 'calc(100% - 136px)')};
`;

export const Toggler = styled.button.attrs(({ isOpen }) => ({
  type: 'button',
  className: isOpen ? 'shadowed--inset' : 'shadowed',
}))`
  width: 100%;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 30px;
  margin-bottom: 20px;

  font-size: 1.4rem;

  border: none;

  background-color: white;

  transition: all 200ms ease-in-out;

  svg {
    margin-left: 10px;
    transition: transform 200ms ease-in-out;

    transform: rotate(${({ isOpen }) => (isOpen ? '180' : '-0')}deg);
    font-size: 18px;
  }
`;

export const FiltersContainer = styled.div`
  position: absolute;
  left: 102%;
  top: 0;
  z-index: 101;
  transition: all 200ms ease-in-out;
  overflow: hidden;

  min-height: ${({ isOpen }) => (isOpen ? '200px' : '0px')};

  width: ${({ isOpen }) => (isOpen ? '350px' : '0px')};
  padding: ${({ isOpen }) => (isOpen ? '20px' : '0px')};
  background-color: white;
  border-radius: 30px;

  box-shadow: ${({ isOpen }) =>
    isOpen ? `0 4px 8px 4px rgba(0, 0, 0, 0.1)` : ''};
`;

export const ResetButton = styled.button.attrs({ type: 'button' })`
  padding: 5px 8px;
  border: none;
  border-radius: 4px;

  font-size: 14px;
  font-weight: 500;
  font-family: 'Raleway', sans-serif;
  width: 100%;
`;
