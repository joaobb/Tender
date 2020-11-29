import styled from 'styled-components';

import Textless from '../../assets/favicon.png';
import Image from '../../assets/tender_logo.png';

export const Logo = styled.img.attrs(({ textless }) => ({
  src: !textless ? Image : Textless,
}))`
  width: ${({ width }) => width || '200px'};
  height: ${({ textless, width }) => (textless ? width : 'auto' || '200px')};

  transition: filter 200ms ease-out;

  &:hover {
    ${({ hoverable }) => (hoverable ? { filter: 'brightness(1.3)' } : '')}
  }
`;

export default Logo;
