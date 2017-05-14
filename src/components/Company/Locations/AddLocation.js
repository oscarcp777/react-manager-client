import React from 'react';
import PropTypes from 'prop-types';
import AddLocationForm from './AddLocationForm'
import {connect} from 'react-redux';
import ModalRedux from '../../Commons/ModalRedux'
import {toogleAddLocation} from '../../../actions/Modals'
import {saveLocation} from '../../../actions/Locations'

const AddLocation = (props) => (
        <ModalRedux
          isOpen={props.isOpen}
          toggle={props.toggle}
          title="Locations"
          >
              <AddLocationForm onSubmit={props.onSubmit} toggle={props.toggle}/>
        </ModalRedux>
)
const mapDispatchToProps = (dispatch) => {
    return {
        toggle: () => {
            dispatch(toogleAddLocation());
        },
        onSubmit: (values) => {
          console.log("values",values);
            dispatch(toogleAddLocation());
            dispatch(saveLocation(values));
        }
    };
};

AddLocation.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
};
export default connect((state)=>({isOpen: state.modal.modalAddLocation}), mapDispatchToProps)(AddLocation);
