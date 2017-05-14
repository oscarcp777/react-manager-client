import React from 'react';
import AddUserForm from './AddUserForm'
import {connect} from 'react-redux';
import {reset} from 'redux-form';
import {addUser} from '../../../actions/Users'

const AddUser = (props) => (
  <div className="mb-3 mt-3">
    <h5>Manage Users</h5>
    <p className="text-muted">Add More Users</p>
      <AddUserForm onSubmit={props.onSubmit}/>
    </div>
)
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    onSubmit: (values) =>{
      dispatch(addUser(values));
      dispatch(reset('addUserForm'));
    }
  };
};
export default connect(null, mapDispatchToProps)(AddUser);
