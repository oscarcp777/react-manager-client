import React from 'react';
import {NavLink} from 'react-router-dom'
import SwitchBtn from './SwitchBtn'

const SidebarItem = ({path, icon, name}) => (
    <li className="nav-item">
        <NavLink to={path} className="nav-link" activeClassName="active">
            <i className={icon}></i>
            {name}
        </NavLink>
    </li>
)

const Sidebar = props => (

    <div className="sidebar">
        <nav className="sidebar-nav">
            <ul className="nav">
                <li className="divider"></li>
                {props.menu.map((item, index) => (
                  item.path !== '/'?<SidebarItem key={index} name={item.name} icon={item.icon} path={item.path}/>:''
                ))}
                <li className="divider"></li>
                <li className="nav-swich">
                    <SwitchBtn></SwitchBtn>
                </li>
            </ul>
        </nav>

    </div>
)

export default Sidebar;
