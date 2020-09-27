import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.main`
	user-select: none;
	font-family: 'Raleway', sans-serif;

	transition: heigth 3s ease;

	/* width: 50%; */
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;

	#container {
	}

	#tenderLogo {
		width: 200px;
	}

	#loginForm {
		width: fit-content;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
	}

	#showPassword {
		display: none;
	}

	@media (max-width: 1000px) {
		main {
			/* width: 55% */
		}
	}
	@media (max-width: 800px) {
		background-image: none;
		main {
			width: 100%;
			align-items: center;
		}
	}
`;

export const ContentContainer = styled.div`
	height: 60%;

	display: inherit;
	flex-direction: inherit;
	align-items: center;
	justify-content: space-between;
`;

export const SubmitButton = styled.button`
	width: 365px;
	padding: 15px 50px;
	margin-top: 15px;

	border-radius: 50px;
	border: none;
	background-image: linear-gradient(190deg, rgb(242, 146, 43) 0%, rgb(211, 47, 45) 100%);

	font-size: large;
	font-weight: bold;
	color: white;

	filter: ${({ isLoading }) => (isLoading ? 'opacity(0.5) !important' : 'none')};
`;

export const FormContainer = styled.div`
	width: fit-content;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;

	border-radius: 30px;
	padding: 20px 20px 40px;

	background-color: white;

	h1 {
		margin: 20px 0 30px 10px;
	}
`;

export const Label = styled.label`
	width: 380px;

	padding: 8px 10px 10px;
	margin-bottom: 15px;

	display: inherit;
	flex-direction: column;

	border-radius: 10px;

	color: ${colors.darkGreen};
	font-weight: bold;
`;

export const InputContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;

	border-bottom: 1px solid rgba(84, 1, 0, 0.3);
	margin: 8px 0;
	background-color: white;
`;

export const Input = styled.input`
	width: 85%;
	padding: 5px 10px;

	border: none;
	border-radius: 5px;

	background-color: transparent;

	font-size: large;
	color: ${colors};

	&[type='password'] {
		font-weight: bold;
	}
`;

export const PasswordInputCamp = styled(Input)`
	width: 75%;
`;
