import React, { Component } from 'react';

import { AccessContainer } from './styles/SignInUp';

import EmailInput from '../components/emailInput';
import PasswordInput from '../components/PasswordInput';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            passwordConfirmation: "",

            loading: false,
        }
    }

    handleChangeInput = (element) => {
        const { name, value } = element.target;
        console.log("Handle change ", name, "Valor -> ", value, "State: ", this.state[name])
        this.setState({ [name]: value });
    };

    onSubmit = async (e) => {
        const { email, password } = this.state;

        console.log(this.state)
        e.preventDefault();
        console.log()
        this.setState({ loading: true });
        // TODO: Send request
        this.setState({ loading: false });

    }

    render() {
        let { email, password, passwordConfirmation, loading } = this.state;
        return (
            <AccessContainer>
                <main>
                    <div id="container">
                        <div id="formContainer">
                            <h1>Bem vindo!</h1>

                            <form id="registerForm" onSubmit={() => alert("Loging")}>

                                <EmailInput email={email} handleChange={this.handleChangeInput} />
                                <PasswordInput
                                    password={password}
                                    handleChange={this.handleChangeInput}
                                />
                                <PasswordInput
                                    title="Confirme sua senha"
                                    isConfirmation={true}
                                    password={passwordConfirmation}
                                    handleChange={this.handleChangeInput}
                                />

                                <button id="submitBt" type="button" onClick={this.onSubmit} disabled={loading}>
                                    {loading ? null : "CADASTRAR"}
                                </button>
                            </form>
                        </div>
                    </div>
                </main>
            </AccessContainer>
        )
    }
}
