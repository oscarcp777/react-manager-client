import React, { PropTypes } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, path, authenticated }) => (
  <Route  path={path}
    render={props => (
      authenticated ===false ? (
         <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/dashboard',
          state: { from: props.location }
        }}/>
      )
    )}
  />
);

const { object, bool, string, func } = PropTypes;

PublicRoute.propTypes = {
  component: func.isRequired,
  exact: bool,
  path: string.isRequired,
  authenticated: bool.isRequired,
  location: object
};

export default PublicRoute;
