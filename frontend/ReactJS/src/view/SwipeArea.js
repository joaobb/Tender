import React from 'react';
import { Link } from 'react-router-dom';
import { SubmitButton } from './styles/Auth';

const SwipeArea = () => {
	const signOut = () => {
		localStorage.clear();
		window.location.reload();
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100%',
			}}
		>
			HELLO AND WELLCOME TO THE <b>TENDER</b>
			<Link to="/recipes/new">GO TO RECIPE CREATION</Link>
			<Link to="/swipe">GO TO SWIPE AREA</Link>
			<SubmitButton type="button" onClick={signOut}>
				SIGN OUT
			</SubmitButton>
		</div>
	);
};

export default SwipeArea;
