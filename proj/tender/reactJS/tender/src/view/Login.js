import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faUser, faLock } from '@fortawesome/free-solid-svg-icons'

import { LoginContainer } from './styles/Login';
import Logo from "../assets/tinder_logo.png";

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
        this.setState(ps => (ps[name] = value));
    };

    onSubmit = async (e) => {
        e.preventDefault();
        console.log("hello")
        this.setState({ loading: true });
        // TODO: Send request
        this.setState({ loading: false });

    }

    onShowPassowrd = () => {
        this.setState(prevState => ({
            showPassword: !prevState.showPassword
        }))
    }

    render() {
        let { email, password, loading } = this.state;
        return (
            <LoginContainer>
                <main>
                    <div id="container">
                        <img id="tenderLogo" alt="Tender" src={Logo} />

                        <div id="formContainer">
                            <h1>Bem vindo novamente!</h1>

                            <form id="loginForm" onSubmit={() => alert("Loging")}>
                                <label className="textInputLabel">
                                    Email
                                    <div className="input">
                                        <FontAwesomeIcon icon={faUser} />
                                        <input
                                            name="email"
                                            type="email"
                                            value={email}
                                            onChange={this.handleChangeInput}
                                            required
                                        />
                                    </div>
                                </label>
                                <label className="textInputLabel">
                                    Senha
                                    <div className="input">
                                        <FontAwesomeIcon icon={faLock} />
                                        <input
                                            name="password"
                                            id="passwordInput"
                                            type={this.state.showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={this.handleChangeInput}
                                            required
                                        />

                                        <label htmlFor="showPassword">
                                            {this.state.showPassword ?
                                                <FontAwesomeIcon icon={faEyeSlash} title="Não mostrar senha" /> :
                                                <FontAwesomeIcon icon={faEye} title="Mostrar senha" />
                                            }
                                        </label>
                                        <input id="showPassword" type="checkbox" onChange={this.onShowPassowrd} />

                                    </div>
                                </label>
                                <button id="submitBt" type="button" onClick={this.onSubmit} disabled={loading}>
                                    {loading ? null : "ENTRAR"}
                                </button>
                            </form>
                        </div>

                        <a href="#signUp" id="signUp">Ainda não tenho conta</a>
                    </div>
                </main>
            </LoginContainer>
        )
    }
}
