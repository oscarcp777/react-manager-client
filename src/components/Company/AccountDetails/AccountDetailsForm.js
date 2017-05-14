import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
import FormGroup from '../../Commons/FormGroup'
import {required} from '../../Commons/Validators'
import SelectRedux from '../../Commons/SelectRedux'
import ModalChangePwd from './ModalChangePwd'
import Countries from '../../../config/data/Countries'

class AccountDetailsForm extends Component {


    render() {
        const {toogleModal, handleSubmit, submitting, invalid} = this.props
        return (
            <form className="container form-pb" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="offset-sm-2 col-lg-8">

                        <h5 className="mb-2">Account Holder Details</h5>
                        <div className="row">
                            <Field className="col-md-6" name="firstName" type="text" component={FormGroup} label="First Name" validate={required}/>
                            <Field className="col-md-6" name="lastName" type="text" component={FormGroup} label="Last Name" validate={required}/>
                        </div>
                        <div className="row">
                            <Field className="col-md-6" name="contactNumber" type="number" component={FormGroup} label="Contact Number" validate={required}/>
                            <Field className="col-md-6" name="email" type="email" component={FormGroup} disabled={true} label="Email Address"/>
                        </div>
                        <h5 className="mb-2">Company Details</h5>
                        <div className="row">
                            <Field className="col-md-6" name="companyName" type="text" component={FormGroup} label="Company Name" validate={required}/>
                            <Field className="col-md-6" name="registerName" type="text" component={FormGroup} label="Registered Name" validate={required}/>
                        </div>
                        <div className="row">
                            <Field className="col-md-6" name="webAddress" type="text" component={FormGroup} label="Web address" validate={required}/>
                            <Field className="col-md-6" name="phoneNumber" type="text" component={FormGroup} label="Phone Number" validate={required}/>
                        </div>
                        <h5 className="mb-2">Company Address</h5>
                        <div className="row">
                            <Field className="col-md-6" name="1stLine" type="text" component={FormGroup} label="1st Line of the Address" validate={required}/>
                            <Field className="col-md-6" name="2stLine" type="text" component={FormGroup} label="2st Line of the Address" validate={required}/>
                        </div>
                        <div className="row">
                            <Field className="col-md-6" name="city" type="text" component={FormGroup} label="City/Town" validate={required}/>
                            <Field className="col-md-6" name="state" type="text" component={FormGroup} label="County/State" validate={required}/>
                        </div>
                        <div className="row">
                            <Field className="col-md-6" name="postCode" type="text" component={FormGroup} label="Post Code/Zip Code" validate={required}/>
                            <Field className="col-md-6" name="country" type="text" options={Countries} component={SelectRedux} label="Country" validate={required}/>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <button className="btn btn-outline-primary btn-block" type="button" onClick={toogleModal}>
                                    <i className="fa fa-key"></i>
                                    Change Password
                                </button>
                                <ModalChangePwd/>
                            </div>
                        </div>

                        <div className="row mt-2">
                            <div className="col-sm-12">
                              <div className="float-right">
                                <button className="btn btn-secondary" type="submit" disabled={submitting || invalid}>
                                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                                    &nbsp; Back
                                </button>
                                {' '}
                                <button className="btn btn-primary" type="submit" disabled={submitting || invalid}>
                                    Next &nbsp;
                                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'accountDetailsForm',enableReinitialize: true})(AccountDetailsForm)
