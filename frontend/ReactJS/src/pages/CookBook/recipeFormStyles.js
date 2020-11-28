import styled from 'styled-components';

export const Container = styled.form`
  position: relative;
  border: 1px solid black;

  background: white;

  width: 500px;
  border-radius: 16px;

  margin: 10px auto;

  font-family: 'Raleway', sans-serif;
`;

export const CloseButton = styled.button.attrs({
  type: 'button',
})`
  position: absolute;
  top: -10px;
  right: -10px;

  background-color: #989898;
  border: none;
  border-radius: 50%;

  padding: 5px;

  line-height: 0;
  font-size: 1.5rem;
  color: #f3f3f4;
`;

export const ImageHeaderContainer = styled.header`
  background-image: url(${({ src }) => src});
  background-size: cover;

  height: 300px;
  width: 100%;
  border-radius: 16px 16px 0 0;

  margin-bottom: 30px;
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

	width: inherit;

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
`;

export const TextArea = styled.textarea`
  ${GeneralInputStyle}

  resize: none;

  &:focus {
    min-height: 50px;
    height: auto;
  }
`;

export const Select = styled.select`
  ${GeneralInputStyle}

  &:hover {
    cursor: pointer;
  }
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & > * {
    :not(:first-child) {
      margin-left: 3px;
    }
    :not(:last-child) {
      margin-right: 3px;
    }
  }
`;

export const NumberInput = styled(Input)``;

export const InputContainer = styled.div`
  position: relative;
  width: ${({ block }) => (block ? '100%' : 'fit-content')};

  input,
  textarea {
    padding: 10px
      ${({ prependedText }) =>
        prependedText ? `16px 10px 50px` : `16px 10px 16px`} !important;
  }

  &:before,
  &:after {
    position: absolute;
    margin: ${({ textarea }) => (textarea ? '6px 0 17px' : '6px 0 13px')} 0;

    /* bottom: ${({ textarea }) => (textarea ? '4px' : '0')}; */
    top: 0px;
    bottom: 0px;

    display: flex;
    align-items: center;

    background-color: #f3f3f4;
    padding: 0 8px;

    font-weight: bold;

    &:focus {
      background-color: #f7f7ff;
      border: 1px solid rgba(242, 146, 43, 0.4);
      border-right: none;
    }
  }

  &:before {
    content: ${({ prependedText }) =>
      prependedText ? `'${prependedText}'` : ''};
    left: 1px;
    border-radius: 8px 0 0 8px;
  }

  &:after {
    content: ${({ appendedText }) => (appendedText ? `'${appendedText}'` : '')};
    right: 1px;
    border-radius: 0 8px 8px 0;
  }
`;

export const FormInputContainer = styled.div`
  display: grid;
  /* flex-direction: column; */
`;

export const MultipleEntityContainer = styled.div`
  display: grid;

  transition: all 200ms ease;

  &:hover {
    transition: all 200ms ease;
    background-color: #f3f3f452;
    border-radius: 16px;
  }
`;

export const TextualData = styled.div`
  margin: 10px;
`;
