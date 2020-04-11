import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Container from './styles/Access'
import Logo from "../assets/tender_logo.png";

import Login from './Login';
import Register from './Register';

function Access() {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleSignIn = () => {
        setIsSignIn(!isSignIn)
    }

    return (
        <Container isSignIn={isSignIn} className="Access">
            <Router>
                <div className="accessForm">
                    <img id="tenderLogo" alt="Tender" src={Logo} />

                    <div>
                        <Route exact path="/" render={props => <Login {...props} />} />
                        <Route path="/register" render={props => <Register {...props} />} />
                    </div>

                    <Link
                        to={isSignIn ? "/register" : "/"}
                        className="accessTypes"
                        onClick={toggleSignIn}
                        >
                        {isSignIn ? "Ainda não" : "Já"} tenho conta
                    </Link>
                </div>
            </Router>
        </Container>
    )
}

export default Access;