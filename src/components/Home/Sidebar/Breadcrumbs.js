import React from 'react';
import {Route, Switch} from 'react-router-dom'
const Breadcrumbs = props => (
    <ul className="nav navbar-nav hidden-md-down">
        <Switch>
            {props.menu.map((route, index) => (<Route key={index} path={route.path} exact={route.exact} render={route.breadcrumb}/>))}
        </Switch>
    </ul>
);
export default Breadcrumbs;
