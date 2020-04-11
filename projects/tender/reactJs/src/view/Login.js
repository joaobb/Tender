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
            loading: false,
            showPassword: false,
        }
    }

    handleChangeInput = (element) => {
        const { name, value } = element.target;
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
        let { email, password, loading } = this.state;
        return (
            <AccessContainer>
                <main>
                    <div id="container">

                        <div id="formContainer">
                            <h1>Bem vindo novamente!</h1>

                            <form id="loginForm" onSubmit={() => alert("Loging")}>
                                <EmailInput email={email} handleChange={this.handleChangeInput} />
                                <PasswordInput password={password} handleChange={this.handleChangeInput} />

                                <button id="submitBt" type="button" onClick={this.onSubmit} disabled={loading}>
                                    {loading ? null : "ENTRAR"}
                                </button>
                            </form>
                        </div>
                    </div>
                </main>
            </AccessContainer>
        )
    }
}
