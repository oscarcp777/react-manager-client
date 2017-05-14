import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import * as sessionActions from '../../actions';
import LoginForm from './LoginForm'
// should work in any browser without browserify

class Login extends Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    state = {
        errorLogin: ''
    }
    submit(user) {
        const {login} = this.props.actions;
        const {history} = this.props;
        login(user, history).catch((error, reject) => {
            this.setState({errorLogin: 'Invalid Email/Password.'})
        });
    }
    render() {
        return (<LoginForm errorLogin={this.state.errorLogin} callSubmit={this.submit}/>);
    }
}

const {object} = PropTypes;

Login.propTypes = {
    actions: object.isRequired
};

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
    };
};

export default withRouter(connect(null, mapDispatch)(Login));
