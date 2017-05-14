import React, { PropTypes } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, exact = true, path, authenticated }) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      authenticated ? (
         <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )}
  />
);

const { object, bool, string, func } = PropTypes;

PrivateRoute.propTypes = {
  component: func.isRequired,
  exact: bool,
  path: string.isRequired,
  authenticated: bool.isRequired,
  location: object
};

export default PrivateRoute;
