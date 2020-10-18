import React from 'react';
import { useHistory } from 'react-router-dom';
import { SubmitButton } from './styles/Auth';

const SwipeArea = () => {
	const history = useHistory();

	const signOut = () => {
		localStorage.clear();
		window.location.reload();
	};

	const goToRecipes = () => {
		history.push('/recipes/new');
	};

	return (
		<div>
			HELLO AND WELLCOME TO THE <b>SWIPE AREA</b>{' '}
			<SubmitButton type="button" isLoading onClick={goToRecipes}>
				GO TO RECIPE CREATION
			</SubmitButton>
			<SubmitButton type="button" onClick={signOut}>
				SIGN OUT
			</SubmitButton>
		</div>
	);
};

export default SwipeArea;
