import styled from 'styled-components';
import SignInImage from '../../assets/anne-sophie-benoit-Fan_HlAfpu0-unsplash.jpg';
import SignUpImage from '../../assets/anne-sophie-benoit-Fan_HlAfpu0-unsplashh.jpg';

import colors from '../../styles/colors';

const Container = styled.div`
	min-height: fit-content;
	height: 100%;

	display: flex;
	align-items: center;

	background-image: url(${(props) => (props.isSignIn ? SignInImage : SignUpImage)});
	background-repeat: no-repeat;
	background-position: right;
	background-color: #d0d3d8;
	background-size: contain;

	user-select: none;
	font-family: 'Raleway', sans-serif;

	color: ${colors.grayFont};

	.accessTypes {
		padding: 15px;

		color: ${colors.grayFont};
		font-size: large;
		font-weight: bold;
		text-decoration: none;

		transition: all 300ms ease;

		&:hover {
			color: rgb(160, 35, 34);
		}
	}

	@media (max-width: 800px) {
		background-image: none;
		justify-content: center;
	}
`;

export const AccessForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 70vw;
`;

export const TenderLogo = styled.img`
	width: 200px;
`;

export default Container;
