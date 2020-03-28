import React, { Component } from 'react';
import { LoginContainer } from './styles/Login';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            loading: false,
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
    render() {
        let { email, password, loading } = this.state;
        return (
            <LoginContainer>
                <main>
                    <h1>Entrar</h1>

                    <form id="loginForm" onSubmit={() => alert("Loging")}>
                        <label>
                            Email
                        <input  
                                name="email"
                                type="email"
                                value={email}
                                onChange={this.handleChangeInput}
                                required
                            />
                        </label>
                        <label>
                            Senha
                        <input
                                name="password"
                                type="password"
                                value={password}
                                onChange={this.handleChangeInput}
                                required
                            />
                        </label>
                        <button type="button" onClick={this.onSubmit} disabled={loading}>
                            {loading ? null : "Entrar"}
                        </button>
                    </form>
                </main>
            </LoginContainer>
        )
    }
}
