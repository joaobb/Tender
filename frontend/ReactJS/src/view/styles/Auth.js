import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.main`
	user-select: none;
	font-family: 'Raleway', sans-serif;

	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;

	transition: heigth 3s ease;

	@media (max-width: 1000px) {
		main {
			/* width: 55% */
		}
	}

	@media (max-width: 800px) {
		background-image: none;
		justify-content: center;

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

export const SubmitButton = styled.button.attrs(({ isLoading }) => ({
	disabled: isLoading ? true : false,
	'data-testid': 'submitButton',
}))`
	width: ${({ block }) => (block ? '100%' : '365px')};
	height: ${({ height }) => (height ? height : 'initial')};

	padding: 12px 0;

	margin-top: 15px;

	border-radius: 12px;
	border: none;
	background-image: linear-gradient(190deg, rgb(242, 146, 43) 0%, rgb(211, 47, 45) 100%);

	font-size: large;
	font-weight: bold;
	color: white;

	filter: ${({ isLoading }) => (isLoading ? 'opacity(0.5) !important' : 'none')};

	transition: all 300ms ease;

	:hover {
		transition-duration: 200ms;
		box-shadow: 0 0 10px rgb(33 33 33 / 0.5);
		filter: brightness(1.05);
		cursor: ${({ isLoading }) => (isLoading ? 'default' : 'pointer')};
	}
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;

	width: fit-content;
	border-radius: 16px;
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
