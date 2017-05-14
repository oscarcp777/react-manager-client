import React, {Component} from 'react';
import * as sessionActions from '../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import ForgotPasswordForm from './ForgotPasswordForm'

class ForgotPassword extends Component {
  constructor(props, context) {
    super(props, context);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit = (values) => {
    // Do something with the form values
    const {forgotPassword} = this.props.actions;
    const {history} = this.props;
    forgotPassword(values, history).catch((error) => {
      console.log('errororrrrr');
    });
  }
  render() {
    return (<ForgotPasswordForm onSubmit={this.onSubmit}/>)
  }
}

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
};
export default withRouter(connect(null, mapDispatch)(ForgotPassword));
