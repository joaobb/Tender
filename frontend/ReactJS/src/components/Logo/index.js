import styled from 'styled-components';

import Image from '../../assets/tender_logo.png';

export const Logo = styled.img.attrs({
  src: Image,
})`
  width: ${({ width }) => width || '200px'};

  transition: filter 200ms ease-out;

  &:hover {
    ${({ hoverable }) => (hoverable ? { filter: 'brightness(1.3)' } : '')}
  }
`;

export default Logo;
