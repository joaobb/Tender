import React from 'react';

import Logo from '../../../../components/Logo';

import { Container, MessageContainer, Messages } from './styles';

const TextBallons = ({
  title,
  numbered,
  withoutProfile = false,
  messages = [],
}) => {
  return (
    <Container>
      {!withoutProfile && <Logo width="64px" textless />}
      <Messages>
        <Message isTitle text={title} />
        {messages.map((message, i) => (
          <Message
            key={`message${message}#${i + 1}`}
            text={!numbered ? message : `#${i + 1} - ${message}`}
          />
        ))}
      </Messages>
    </Container>
  );
};

const Message = ({ text, isTitle }) => (
  <MessageContainer isTitle={isTitle}>{text}</MessageContainer>
);

export default TextBallons;
