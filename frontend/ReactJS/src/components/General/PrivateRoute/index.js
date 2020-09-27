import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, path, exact, auth = false, ...rest }) => {
	const isLogged = auth;

	return (
		<React.Fragment key={`private ${path}`}>
			<Route
				path={path}
				exact={exact}
				{...rest}
				render={(props) =>
					isLogged ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
				}
			/>
		</React.Fragment>
	);
};

export default PrivateRoute;
