import styled from 'styled-components';
import colors from '../../styles/colors'
import img from '../../assets/anne-sophie-benoit-Fan_HlAfpu0-unsplash.jpg';

export const LoginContainer = styled.div`
    height: 100%;

    display: flex;
    align-items: center;

    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: right;
    background-color: #d0d3d8;
    background-size: contain;

    user-select: none;
    font-family: 'Raleway', sans-serif; 

    main {
        width: 50%;
        height: 100%;

        display: inherit;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        
        color: ${colors.grayFont};
    }

    #container {
        height: 60%;

        display: inherit;
        flex-direction: inherit;
        align-items: center;
        justify-content: space-between;
    }

    #tenderLogo {
        width: 200px;
    }

    #formContainer {
        border-radius: 30px;
        padding: 20px 20px 40px;

        background-color: ${colors.gray};

        h1 {
            margin: 20px 0 30px 10px;
        }
    }

    #loginForm {
        width: fit-content;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;    
    }

    .textInputLabel {
        width: 380px;

        padding: 8px 10px 10px;
        margin-bottom: 15px;

        display: inherit;
        flex-direction: column;

        border-radius: 10px;

        color: ${colors.darkGreen};
        font-weight: bold;

        input {
            width: 85%;
            margin-top: 8px;
            padding: 5px 10px; 

            border: none;
            border-radius: 5px;

            background-color: transparent;
            
            font-size: large;
            color: ${colors};

            &[type='password'] {
                font-weight: bold;
             }
        }
        #passwordInput {
            width: 75%;
        }
    }

    .input {
        display: flex;
        justify-content: space-around;
        align-items: center;

        border-bottom: 2px solid ${colors.green};

        background-color: ${colors.gray} !important;
    }

    #showPassword {
        display: none;
    }

    #submitBt {
        width: 365px;
        padding: 15px 50px;
        margin-top: 15px;

        border-radius: 50px;
        border: none;
        background-color: #22622b;

        font-size: large;
        font-weight: bold;
        color: ${colors.green};
    }

    #signUp {
        padding: 10px 15px;

        color:#22622b;
        font-size: large;
        font-weight: bold;
        text-decoration: none;
    }

    @media (max-width: 1000px) {
        main {
            width: 55%
        }
    }
    @media (max-width: 800px) {
        background-image: none;
        main {
            width: 100%;
            align-items: center;
        }
    }
`