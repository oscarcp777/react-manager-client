// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { Switch } from 'react-router'
import Menu from '../components/Home/Menu'
import MenuCompany from '../components/Company/MenuCompany'
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import Mail from '../components/Auth/Mail';
import ForgotPassword from '../components/Auth/ForgotPassword';
import ChangePassword from '../components/Auth/ChangePassword';
import Page404 from '../components/Simple/Page404'
import PrivateRoute from '../components/Auth/PrivateRoute';
import PublicRoute from '../components/Auth/PublicRoute';
import SetupUser from '../components/Company/SetupUser'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = ({authenticated, checked}) => (
    <Router>
        {checked &&
        <div>
            <Switch>
               {Menu.map((route, index) => (
              <PrivateRoute exact={route.exact} authenticated={authenticated} path={route.path} component={route.main} key={index}/>
               ))}
               <PublicRoute authenticated={authenticated} path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route path="/setup/user" component={SetupUser}/>
              <Route path="/mail/:type" component={Mail}/>
              <Route path="/forgot" component={ForgotPassword}/>
              <Route path="/change" component={ChangePassword}/>
              {MenuCompany.map((route, index) => (
             <PrivateRoute exact={route.exact} authenticated={authenticated} path={route.path} component={route.main} key={index}/>
              ))}
              <Route component={Page404}/>
            </Switch>
        </div>
}
    </Router>
);

const {bool} = PropTypes;

App.propTypes = {
    authenticated: bool.isRequired,
    checked: bool.isRequired
};

const mapState = ({session}) => ({checked: session.checked, authenticated: session.authenticated});

export default connect(mapState)(App);
