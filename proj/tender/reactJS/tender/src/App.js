import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Access from './view/Access';
import Login from './view/Login';
import Register from './view/Register';
import GlobalStyle from './styles/global'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" />
          <Route path="/" exact render={props => <Access {...props} />} />
          <Route path="/login" render={props => <Access {...props} />} />
          <Route path="/register" render={props => <Access {...props} />} />
          {/* <Redirect to='/' /> */}
          {/* <Redirect to="/login" /> */}
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}

export default App;
