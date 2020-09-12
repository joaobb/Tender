import styled from 'styled-components';
import SignInImage from '../../assets/anne-sophie-benoit-Fan_HlAfpu0-unsplash.jpg';
import SignUpImage from '../../assets/anne-sophie-benoit-Fan_HlAfpu0-unsplashh.jpg';

import colors from '../../styles/colors'

const Container = styled.div`
    
    min-height: fit-content;
    height: 100%;

    display: flex;
    align-items: center;

    background-image: url(${props => props.isSignIn ?  SignInImage : SignUpImage});
    background-repeat: no-repeat;
    background-position: right;
    background-color: #d0d3d8;
    background-size: contain;

    user-select: none;
    font-family: 'Raleway', sans-serif; 

    color: ${colors.grayFont};

    #tenderLogo {
        width: 200px;
    }

    .accessTypes {
        padding: 15px;

        color: rgb(160, 35, 34);
        font-size: large;
        font-weight: bold;
        text-decoration: none;
    }

    .accessForm {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 70vw;
    }

    @media (max-width: 800px) {
        background-image: none;
    }
`;
export default Container;