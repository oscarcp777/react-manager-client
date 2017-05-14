import React from 'react';
import PropTypes from 'prop-types';
import AddDepartmentForm from './AddDepartmentForm'
import {connect} from 'react-redux';
import ModalRedux from '../../Commons/ModalRedux'
import {toogleAddDepartment} from '../../../actions/Modals'
import {saveDepartment} from '../../../actions/Departments'

const AddDepartment = (props) => {
  console.log('%%%%%%%%%%% AddDepartment %%%%%%%%%%%%%');
  console.log(props);
  console.log('%%%%%%%%%%%%%%%%%%%%%%%%');
  const { isOpen, toggle, onSubmit, users} = props;
  const listUsers=users?users.map((user)=>({label:user.name,value:user.id})):[]
  return(
        <ModalRedux
          isOpen={isOpen}
          toggle={toggle}
          title="Departments"
          >
        <AddDepartmentForm
          onSubmit={onSubmit}
          toggle={toggle}
          users={listUsers}/>
        </ModalRedux>
)
}


const mapDispatchToProps = (dispatch) => ({
        toggle: () => {
            dispatch(toogleAddDepartment());
        },
        onSubmit: (values) => {
          console.log("values",values);
            dispatch(toogleAddDepartment());
            dispatch(saveDepartment(values));
        }
    })


AddDepartment.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
};
export default connect((state)=>({isOpen: state.modal.modalAddDepartment,users:state.users}), mapDispatchToProps)(AddDepartment);
