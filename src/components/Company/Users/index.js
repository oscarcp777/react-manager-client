import React, {Component} from 'react';
import UsersTable from './UsersTable'
import * as actions from "../../../actions/Users";
import AddUser from './AddUsers'
import {connect} from 'react-redux';

class Users extends Component {

  componentDidMount() {
      this.fetchData();
  }
  fetchData() {
      const { fetchUsers} = this.props;
      fetchUsers();
  }

    render() {
        return (
            <div className="animated fadeIn">
                <div className="card card-default">
                    <div className="card-header main-header">
                        Users
                    </div>

                    <div className="card-block">
                        <div className="row">
                            <div className="offset-md-1 col-md-11 ">
                                <AddUser/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <UsersTable data={this.props.users}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default connect(state=>({users:state.users}), actions)(Users)
