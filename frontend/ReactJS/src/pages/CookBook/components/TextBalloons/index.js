import React, { useState, useContext } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RiPencilFill } from 'react-icons/ri';

import Dropdown, { DropdownItem } from '../../../../components/Dropdown';
import Logo from '../../../../components/Logo';
import RecipeFormContext from '../../../../contexts/recipeFormContext';

import {
  Container,
  MessageContainer,
  Messages,
  OptionsContainer,
} from './styles';

const TextBallons = ({
  type,
  title,
  numbered,
  withoutProfile = false,
  messages = [],
}) => {
  const { isEditable, onEdit, onRemove } = useContext(RecipeFormContext);

  return (
    <Container>
      {!withoutProfile && <Logo width="64px" textless />}
      <Messages>
        <Message isTitle text={title} />
        {messages.map((message, i) => (
          <Message
            index={i}
            type={type}
            isEditable={isEditable}
            key={`message${message}#${i + 1}`}
            text={message}
            prepend={numbered ? `#${i + 1} - ` : undefined}
            onEdit={onEdit}
            onRemove={onRemove}
          />
        ))}
      </Messages>
    </Container>
  );
};

const Message = ({
  index,
  text,
  isTitle,
  type,
  prepend = '',
  isEditable,
  onEdit,
  onRemove,
}) => (
  <>
    <MessageContainer isTitle={isTitle} size={text.length}>
      {`${prepend}${text}`}

      {!isTitle && isEditable && (
        <Options
          index={index}
          type={type}
          onEdit={onEdit}
          onRemove={onRemove}
        />
      )}
    </MessageContainer>
  </>
);

const Options = ({ index, type, onEdit, onRemove }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  const handleClick = (event) => {
    const { name } = event.currentTarget;

    if (name === 'edit') onEdit({ type, index });
    else onRemove({ type, index });

    handleOpen();
  };

  return (
    <>
      <OptionsContainer type="button" onClick={handleOpen}>
        <BsThreeDotsVertical />
      </OptionsContainer>
      <Dropdown left isOpen={isOpen} onToggle={handleOpen} inline shadowed>
        <DropdownItem onClick={handleClick} name="edit" text="Edit" />
        <DropdownItem onClick={handleClick} name="remove" text="Remove" />
      </Dropdown>
    </>
  );
};

export default TextBallons;
