import React from 'react';
import logo from './logo.svg';
import './App.css';

import Main from "./pages/Main"

function App() {
  return (
    <div className="App">
      <header id="page_header">
        <h1>Biqueira<span>online</span></h1>
        <div className="userOptions">
          <button id="sign_in_button">Entrar</button>
          <button id="sign_up_button">Cadastrar-se</button>
        </div>
      </header>
        <Main></Main>
    </div>
  );
}

export default App;
