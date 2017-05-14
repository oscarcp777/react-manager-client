import React from 'react';
import PropTypes from 'prop-types';
import {Modal, ModalHeader} from 'reactstrap';

const ModalRedux = (props) => (
        <Modal isOpen={props.isOpen} toggle={props.toggle} className="{props.className}">
          <ModalHeader toggle={props.toggle}>{props.title}</ModalHeader>
            {props.children}
        </Modal>
)
ModalRedux.propTypes = {
    toggle: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    title : PropTypes.string.isRequired
};
export default ModalRedux
