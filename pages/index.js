import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Register from '../composants/register.jsx';
import Login from '../composants/login.jsx';
import Admin from '../composants/admin.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/admin" component={Admin} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
