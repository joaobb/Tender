import styled from 'styled-components';

import { getFlag } from '../../utils/nationalities';

const OriginFlag = styled.img.attrs(({ origin = 'br' }) => ({
  src: `${getFlag(origin)}`,
}))`
  border-radius: 50%;
  width: ${({ width }) => width || '24px'};
`;

export default OriginFlag;
