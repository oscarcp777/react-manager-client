import React from 'react';
import PropTypes from 'prop-types';
import ModalChangePwdForm from './ModalChangePwdForm'
import {connect} from 'react-redux';
import ModalRedux from '../../Commons/ModalRedux'
import {toogleChangePwd} from '../../../actions/Modals'

const ModalChangePwd = (props) => (
        <ModalRedux
          isOpen={props.isOpen}
          toggle={props.toggle}
          title="Change Password" >
              <ModalChangePwdForm onSubmit={props.onSubmit} toggle={props.toggle}/>
        </ModalRedux>
)
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        toggle: () => {
            dispatch(toogleChangePwd());
        },
        onSubmit: (values) => {
          console.log("values",values);
            dispatch(toogleChangePwd());
        }
    };
};

ModalChangePwd.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
};
export default connect((state)=>({isOpen: state.modal.modalChangePwd}), mapDispatchToProps)(ModalChangePwd);
