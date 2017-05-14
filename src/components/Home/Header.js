import React, {PropTypes} from 'react';
import {Dropdown, DropdownMenu, DropdownItem} from 'reactstrap';
import {Link, withRouter} from 'react-router-dom'
import {logout} from '../../actions';
import {connect} from 'react-redux';

const sidebarToggle = (e)=>{
        e.preventDefault();
        document.body.classList.toggle('sidebar-hidden');
    }

  const  mobileSidebarToggle = (e) =>{
        e.preventDefault();
        document.body.classList.toggle('sidebar-mobile-show');
    }


const Header =(props) =>{
    const {logout,history}= props
    const Breadcrumbs=props.breadcrumbs
    return(
            <header className="app-header navbar">
                <button className="navbar-toggler mobile-sidebar-toggler hidden-lg-up" onClick={mobileSidebarToggle} type="button">
                    <i className="fa fa-bars"></i>
                </button>
                <Link to="/dashboard" className="navbar-brand">
                    <img src="/img/logo.png" alt="Logo" className="hidden-md-down img-fluid"></img>
                </Link>
                <ul className="nav navbar-nav hidden-md-down">
                    <li className="nav-item">
                        <a className="nav-link navbar-toggler sidebar-toggler" onClick={sidebarToggle} href="#">
                            <i className="fa fa-bars"></i>
                        </a>
                    </li>
                </ul>
                <Breadcrumbs menu={props.menu}></Breadcrumbs>
                <ul className="nav navbar-nav ml-auto navbar-nav-right">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-search"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-bell"></i>
                            <span className="badge badge-pill badge-danger">5</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <Dropdown isOpen={props.toogleDDHeader} toggle={props.toggle}>
                            <a onClick={props.toggle} className="nav-link dropdown-toggle nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded={props.toogleDDHeader}>
                                <img src={'/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                            </a>

                            <DropdownMenu className="dropdown-menu-right">
                                <DropdownItem>
                                    <i className="fa fa-user"></i>
                                    Edit Profile</DropdownItem>
                              <DropdownItem onClick={() => history.push('/setup/user')}>
                                    <i className="fa fa-wrench"></i>
                                    Settings</DropdownItem>
                                <DropdownItem onClick={() => history.push('/company/getstart')}>
                                        <i className="fa fa-briefcase"></i>
                                        Company Settings
                                </DropdownItem>
                                  <DropdownItem onClick={() =>logout(history)}>
                                      <i className="fa fa-lock"></i>
                                        Logout
                                  </DropdownItem>

                            </DropdownMenu>
                        </Dropdown>
                    </li>
                </ul>
            </header>
        )
}
const mapDispatchToProps = (dispatch) => {
    return {
        logout: logout,
        toggle: ()=> {
          dispatch({
            type: 'TOOGLE_DD_HEADER'
          });
        }
    };
};
const mapStateToProps = (state) => {
  return {
    toogleDDHeader: state.dropdowns.toogleDDHeader
  };
}
const { func, bool } = PropTypes;

Header.propTypes = {
  logout: func.isRequired,
  toogleDDHeader: bool.isRequired
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
