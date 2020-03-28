import styled from 'styled-components';
import colors from '../../styles/colors'
import img from '../../assets/jonathan-pielmayer-Gn64mz9hTqE-unsplash.jpg';

export const LoginContainer = styled.div`
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(${img});
    background-size: cover;
    background-position: center;

    color: ${colors.gray};

    main, #loginForm{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 50%;
        width: 50vh;
        flex-direction: column;
    }

    label {
        display: inherit;
        flex-direction: column;

        input {
            color: ${colors.gray};
            margin-top: 10px;

            border: none;
            padding: 5px 10px; 
            border-radius: 5px;
            background-color: #cda870;
        }
    }

    button {
        padding: 15px 50px;
        border: none;
        background-color: #22622b;
        border-radius: 10px;
    }

`