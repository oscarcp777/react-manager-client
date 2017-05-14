import React, {Component, PropTypes} from 'react';
import RegisterForm from './RegisterForm'
import * as sessionActions from '../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { withRouter} from 'react-router-dom';

class Register extends Component {

    constructor(props, context) {
        super(props, context);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit = (values) => {
        // Do something with the form values
        const {register} = this.props.actions;
        const { history } = this.props;
        register(values,history).catch((error) => {
          console.log('errororrrrr');
        });
    }
    render() {
        return (<RegisterForm onSubmit={this.onSubmit}/>)
    }
}
const {object} = PropTypes;

Register.propTypes = {
    actions: object.isRequired
};

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
    };
};
export default withRouter(connect(null, mapDispatch)(Register));
