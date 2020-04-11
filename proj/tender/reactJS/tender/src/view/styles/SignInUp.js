import styled from 'styled-components';
import colors from '../../styles/colors'

export const AccessContainer = styled.div`
    user-select: none;
    font-family: 'Raleway', sans-serif; 

    transition: heigth 3s ease;

    main {
        /* width: 50%; */
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        

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
        .passwdInput {
            width: 75%;
        }
    }

    .input {
        display: flex;
        justify-content: space-around;
        align-items: center;


        border-bottom: 1px solid rgba(84, 1, 0,.3);        
        margin: 8px 0;
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
        background-image: linear-gradient(190deg, rgb(242, 146, 43) 0%, rgb(211, 47, 45) 100%);

        font-size: large;
        font-weight: bold;
        color: ${colors.green};
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
`