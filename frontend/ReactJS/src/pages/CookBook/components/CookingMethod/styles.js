import styled from 'styled-components';

export const Container = styled.div.attrs({ className: 'sscroll' })`
  grid-area: cookingMethod;

  padding: 24px;

  height: auto;
  overflow-y: auto;

  & > div {
    margin-bottom: 18px;
  }
`;
