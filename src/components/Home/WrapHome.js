import React from 'react';
import Breadcrumbs from './Sidebar/Breadcrumbs'
import Home from '../Home'
const WrapHome = (props) => {
    const Component = props.component;
    return (
        <Home menu={props.menu} breadcrumbs={Breadcrumbs}>
          <div className="container-fluid mt-2">
            <Component/>
          </div>
        </Home>
    )
}
export default WrapHome;
