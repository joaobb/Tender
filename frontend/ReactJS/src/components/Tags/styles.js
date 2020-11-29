import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'recipe__tags',
})`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.span.attrs({
  className: 'tags__tag',
})`
  color: #5d5d5d;
  font-size: 13px;
  white-space: nowrap;

  background-color: #f5f5f5;
  border-radius: 5px;
  margin: 2px;
  padding: 2px 5px;

  transition: background-color 300ms ease-out;

  &:hover {
    cursor: default;
    background-color: #efefef;
  }
`;
