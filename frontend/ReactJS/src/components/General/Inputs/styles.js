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

const GeneralInputStyle = `
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	box-sizing: border-box;
	height: 40px;
	padding: 10px 16px;
	outline: none;
	border-radius: 8px;
	color: #0d0c22;
	background-color: #f3f3f4;
	border: 1px solid transparent;

	width: 100%;

	transition: all 200ms ease;

	margin: 5px 0 12px;

	&:focus, 
	&:hover {
		transition: all 200ms ease;

    -webkit-box-shadow: 0 0 0 4px rgba(242, 146, 43,0.1);
    box-shadow: 0 0 0 4px rgba(242, 146, 43,0.1);

		background-color: white;
		border: 1px solid rgba(242, 146, 43,0.4);
	}
`;

export const Input = styled.input`
	${GeneralInputStyle}

	&[type='password'] {
		font-weight: bold;
	}
`;

export const PasswordInputCamp = styled(Input)`
	width: 100%;
	padding-right: 35px;
`;

export const FormRow = styled.div`
	position: relative;
`;

export const PasswordVisibility = styled.label`
	position: absolute;
	right: 10px;
	top: 50%;
	transform: translateY(-50%);

	cursor: pointer;

	input {
		display: none;
	}
`;
