import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';
import UserContext, { initialUser } from '../contexts/userContext';
import ROLES from '../utils/roles';

import { privateRouteList, publicRouteList } from './routeList';

const Routes = () => {
  const userToken = localStorage.getItem('@Tender:token');
  const [user, setUser] = useState({ ...initialUser, token: userToken });

  useEffect(() => {
    let userData = localStorage.getItem('@Tender:user');

    if (userData) userData = JSON.parse(userData);

    setUser({ ...userData, token: userToken });
  }, []);

  const isAuth = Boolean(user.token);

  return (
    <UserContext.Provider
      value={{
        userData: user,
        setUserData: setUser,
        isAdmin: user.role === ROLES.ROOT,
        canCreate: user.role < ROLES.USER,
      }}
    >
      <BrowserRouter>
        {isAuth ? (
          <Switch>
            {privateRouteList.map((routeProps) => (
              <PrivateRoute
                key={`private#${routeProps.path}`}
                auth={isAuth}
                {...routeProps}
              />
            ))}
            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            {publicRouteList.map((routeProps) => (
              <PublicRoute
                key={`public#${routeProps.path}`}
                auth={isAuth}
                {...routeProps}
              />
            ))}
            <Redirect to="/login" />
          </Switch>
        )}
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default Routes;
