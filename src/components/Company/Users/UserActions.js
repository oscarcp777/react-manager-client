import React,{Component} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {connect} from 'react-redux';
import { withRouter} from 'react-router-dom'
import * as actions from '../../../actions/Users'

class UserActions extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Actions
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-right">
          <DropdownItem onClick={() => this.props.history.push('/setup/user')}>Edit</DropdownItem>
          <DropdownItem onClick={()=>this.props.changeStatusUser(this.props.userId,'ACTIVE')}>Activate</DropdownItem>
          <DropdownItem onClick={()=>this.props.changeStatusUser(this.props.userId,'SUSPENDED')}>Suspend</DropdownItem>
          <DropdownItem onClick={()=>this.props.deleteUser(this.props.userId)}>Delete</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}
export default withRouter(connect(null, actions)(UserActions));
