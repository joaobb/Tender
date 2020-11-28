import styled from 'styled-components';

const GradientButton = styled.button.attrs(({ isLoading }) => ({
	disabled: isLoading ? true : false,
	'data-testid': 'gradientButton',
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

export default GradientButton;
