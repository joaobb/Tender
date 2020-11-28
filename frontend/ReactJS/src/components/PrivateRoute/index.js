import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Navbar from '../Navbar';

import { Container } from './styles';

const PrivateRoute = ({
  component: Component,
  path,
  exact,
  auth = false,
  title,
  ...rest
}) => {
  const isLogged = auth;
  document.title = `${title} - Tender`;

  return (
    <React.Fragment key={`private ${path}`}>
      <Route
        path={path}
        exact={exact}
        {...rest}
        render={(props) =>
          isLogged ? (
            <Container>
              <Navbar />
              <Component {...props} />
            </Container>
          ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          )
        }
      />
    </React.Fragment>
  );
};

export default PrivateRoute;
