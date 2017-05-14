import React, {Component} from 'react';
import AccountDetailsForm from './AccountDetailsForm'
import * as actions from '../../../actions/AccountDetails'
import {connect} from 'react-redux';
class AccountDetails extends Component {

  componentWillReceiveProps(nextProps){
    const { fetchAccountDetails,user} = this.props;
    if(nextProps.user !== user){
      fetchAccountDetails(nextProps.user);
    }
  }

    onSubmit(values) {
        console.log('························', values);
    }
    render() {
        const {initialValues,toggleChangePwd} = this.props
        return (
            <div className="animated fadeIn">
                <div className="card card-default">
                    <div className="card-header main-header">
                        Account Details
                    </div>

                    <div className="card-block">
                        <AccountDetailsForm onSubmit={this.onSubmit} toogleModal={toggleChangePwd} initialValues={initialValues}/>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
  user: state.session.user,
  initialValues: state.accountDetails,
  toggleChangePwd:state.modal.toggleChangePwd
});
export default connect(mapStateToProps, actions)(AccountDetails)
