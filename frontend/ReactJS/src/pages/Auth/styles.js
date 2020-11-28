import styled from 'styled-components';

import SignInImage from '../../assets/anne-sophie-benoit-Fan_HlAfpu0-unsplash.jpg';
import SignUpImage from '../../assets/anne-sophie-benoit-Fan_HlAfpu0-unsplashh.jpg';
import colors from '../../styles/colors';

export const Container = styled.div`
  min-height: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  background-image: url(${(props) =>
    props.isSignIn ? SignInImage : SignUpImage});
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

export const ContentContainer = styled.div`
  height: 60%;

  display: inherit;
  flex-direction: inherit;
  align-items: center;
  justify-content: space-between;
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

export const AccessForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
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

export const TenderLogo = styled.img`
  width: 200px;
`;
