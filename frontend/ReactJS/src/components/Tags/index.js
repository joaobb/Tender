import React from 'react';

import { Container, Tag } from './styles';

const Tags = ({ tags }) => (
  <Container>
    {tags.map((tag) => (
      <Tag key={tag}>{tag}</Tag>
    ))}
  </Container>
);

export default Tags;
