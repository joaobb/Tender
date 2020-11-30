import React from 'react';
import { useHistory } from 'react-router-dom';

import { LinkContainer } from './styles';

const DotLink = ({ title, isActive, togglelable, icon, href, ...props }) => {
  const history = useHistory();

  const handleClick = () => {
    if (togglelable && isActive) history.goBack();
  };

  return (
    <LinkContainer
      to={href}
      isActive={isActive}
      title={title}
      onClick={handleClick}
      {...props}
    >
      {icon}
    </LinkContainer>
  );
};

export default DotLink;
