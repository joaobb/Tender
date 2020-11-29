import styled from 'styled-components';

export const Container = styled.div`
  position: ${({ fullScreen }) => (fullScreen ? 'fixed' : 'absolute')};

  z-index: 999;

  width: ${({ fullScreen }) => (fullScreen ? '100vw' : '100%')};
  height: ${({ fullScreen }) => (fullScreen ? '100vh' : '100%')};

  align-items: center;
  display: flex;
  justify-content: center;
  overflow: hidden;

  background-color: #f5f5f59e;
`;
