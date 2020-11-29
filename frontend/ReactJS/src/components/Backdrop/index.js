import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  z-index: 1;

  background-color: ${({ colored }) =>
    colored ? 'rgba(220, 220, 220, 0.6)' : ''};
  animation: ${fadeIn} 300ms cubic-bezier(0.2, 0.63, 0.32, 1.28);
`;

export default Backdrop;
