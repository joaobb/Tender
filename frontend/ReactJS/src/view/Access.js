import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Container, { AccessForm, TenderLogo } from './styles/Access';
import Logo from '../assets/tender_logo.png';

import Login from './SignIn';
import Register from './SignUp';

const Access = () => {
	const [isSignIn, setIsSignIn] = useState(true);

	const toggleSignIn = () => {
		setIsSignIn(!isSignIn);
	};

	return (
		<Container isSignIn={isSignIn}>
			<Router>
				<AccessForm>
					<TenderLogo alt="Tender" src={Logo} />

					<div>
						<Route exact path="/" render={(props) => <Login {...props} />} />
						<Route path="/register" render={(props) => <Register {...props} />} />
					</div>

					<Link to={isSignIn ? '/register' : '/'} className="accessTypes" onClick={toggleSignIn}>
						{isSignIn ? 'I still have no' : 'I already have an'} account
					</Link>
				</AccessForm>
			</Router>
		</Container>
	);
};

export default Access;
