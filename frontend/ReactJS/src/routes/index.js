import React from 'react';

import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import PrivateRoute from '../components/General/PrivateRoute';
import PublicRoute from '../components/General/PublicRoute';

import { privateRouteList, publicRouteList } from './routeList';

const Routes = () => {
	const auth = Boolean(localStorage.getItem('@Tender:token'));

	return (
		<BrowserRouter>
			{auth ? (
				<Switch>
					{privateRouteList.map((routeProps) => (
						<PrivateRoute key={`private#${routeProps.path}`} auth={auth} {...routeProps} />
					))}
					<Redirect to="/" />
				</Switch>
			) : (
				<Switch>
					{publicRouteList.map((routeProps) => (
						<PublicRoute key={`public#${routeProps.path}`} auth={auth} {...routeProps} />
					))}
					<Redirect to="/" />
				</Switch>
			)}
		</BrowserRouter>
	);
};

export default Routes;
