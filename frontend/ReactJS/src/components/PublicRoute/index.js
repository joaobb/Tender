import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, path, exact, auth = false, ...rest }) => {
	const isLogged = auth;
	return (
		<Route
			path={path}
			exact={exact}
			{...rest}
			render={(props) =>
				!isLogged ? (
					<Component {...props} />
				) : path !== '/' ? (
					<Redirect to={{ pathname: '/', state: { from: props.location } }} />
				) : null
			}
		/>
	);
};

export default PublicRoute;
