import React from 'react';

import { SubmitButton } from './styles/Auth';

const SwipeArea = () => {
	const signOut = () => {
		localStorage.clear();
		window.location.reload();
	};

	return (
		<div>
			HELLO AND WELLCOME TO THE <b>SWIPE AREA</b>
			<SubmitButton type="button" onClick={signOut}>
				SIGN OUT
			</SubmitButton>
		</div>
	);
};

export default SwipeArea;
