import React, {Component} from 'react';
import Home from '../../Home'
import MenuCompany from '../MenuCompany'
import UserDetailsForm from './UserDetailsForm'
import WorkDetailsForm from './WorkDetailsForm'
import SettingsForm from './SettingsForm'
import Wizard from './Wizard'
import * as actions from "../../../actions/Users";
import {connect} from 'react-redux';

const Header = (props) => (
  <ul className="nav navbar-nav hidden-md-down">
    <li className="nav-item px-1">
      User Setup</li>
  </ul>
)

class SetupUser extends Component {

  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  componentDidMount() {
    const { fetchUsers} = this.props;
    fetchUsers();
  }

  nextPage() {
    this.setState({
      page: this.state.page + 1
    })
  }
  previousPage() {
    this.setState({
      page: this.state.page - 1
    })
  }

  render() {
    const {onSubmit,users} = this.props
    const {page} = this.state
    const listUsers=users.map((user)=>({label:user.name,value:user.id}))
    return (
      <Home menu={MenuCompany} breadcrumbs={Header}>
        <div>
          <Wizard page={page}/>
          <div className="container-fluid mt-2">

            <div className="animated fadeIn">
              <div className="card card-default">
                <div className="card-block">
                  {page === 1 && <UserDetailsForm users={listUsers} onSubmit={this.nextPage}/>}
                  {page === 2 && <WorkDetailsForm users={listUsers} previousPage={this.previousPage} onSubmit={this.nextPage}/>}
                  {page === 3 && <SettingsForm users={listUsers} previousPage={this.previousPage} onSubmit={onSubmit}/>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Home>
    )
  }
}
export default connect(state=>({users:state.users}), actions)(SetupUser)
