import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import AuthView from '../auth/views/AuthView';

export const DaveelyRouter: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={AuthView} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
