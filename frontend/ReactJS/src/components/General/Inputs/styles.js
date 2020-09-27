import styled from 'styled-components';
import colors from '../../../styles/colors';

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
