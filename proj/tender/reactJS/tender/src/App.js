import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './view/Login';
import GlobalStyle from './styles/global'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" />
          <Route path="/login" render={props => <Login {...props} />} />
          <Route path="/register" />
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}

export default App;
