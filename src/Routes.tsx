import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from './services/auth';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

interface PrivateRouteParams {
  component?: any;
  path?: string;
  exact?: boolean;
}

const PrivateRoute = ({
  component: Component,
  ...rest
}: PrivateRouteParams) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/signin', state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/budgets" component={Dashboard} />
      <PrivateRoute path="/settings" component={Dashboard} />
      <Route path="*" component={() => <Redirect to="/dashboard" />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
