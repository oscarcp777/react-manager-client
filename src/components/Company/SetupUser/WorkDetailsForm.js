import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
import FormGroup from '../../Commons/FormGroup'
import {required} from '../../Commons/Validators'
import SelectRedux from '../../Commons/SelectRedux'
import SwitchFormLeft from '../../Commons/SwitchFormLeft'
import DatePickerGroup from '../../Commons/DatePickerGroup'
class WorkDetailsForm extends Component {
    render() {
        const {users, handleSubmit, submitting, invalid,previousPage} = this.props

        return (
            <form className="container form-pb" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="offset-sm-2 col-lg-8">
                      <div className="row">
                          <Field className="col-md-6" name="addUser"  options={users} component={SelectRedux} label="Add New User Based On" />
                      </div>
                        <h5 className="mb-2">Work Patterns</h5>
                        <div className="row">
                            <Field name="monday" checked={true} component={SwitchFormLeft}  message="Monday"/>
                            <Field name="tuesday" checked={true} component={SwitchFormLeft}  message="Tuesday"/>
                        </div>
                        <div className="row">
                            <Field name="wednesday" checked={true} component={SwitchFormLeft}  message="Wednesday"/>
                            <Field name="thursday" checked={true} component={SwitchFormLeft}  message="Thursday"/>
                        </div>
                        <div className="row">
                            <Field name="friday" checked={true} component={SwitchFormLeft}  message="Friday"/>
                            <Field name="saturday" checked={true} component={SwitchFormLeft}  message="Saturday"/>
                        </div>
                        <div className="row">
                            <Field name="sunday" component={SwitchFormLeft}  message="Sunday"/>
                            <Field name="custom"  component={SwitchFormLeft}  message="Custom"/>
                        </div>
                        <h5 className="my-2">Employment Details</h5>
                        <div className="row">
                            <Field className="col-md-6" name="annualLeave" type="text" component={FormGroup} label="Annual Leave Allowance" validate={required}/>
                            <Field name="fullTime" checked={true} label="Leave Start Date/Employment Start"  component={SwitchFormLeft}  message="Full Time"/>
                        </div>
                        <div className="row">
                            <Field className="col-md-6" name="leaveStart" type="number" component={FormGroup} label="Leave Start Date" validate={required}/>
                            <Field className="col-md-6" name="employmentStart" type="number"  component={FormGroup} label="Employment Start" validate={required}/>
                        </div>
                        <h5 className="mb-2">Hourly Rates</h5>
                        <div className="row">
                            <Field className="col-md-6" name="standardRate" component={DatePickerGroup} label="Standard Hourly Rate" validate={required}/>
                            <Field className="col-md-6" name="chargeableRate"  component={DatePickerGroup} label="Chargeable Hourly Rate" validate={required}/>
                        </div>
                        <h5 className="mb-2">Modules</h5>
                        <div className="row">
                            <Field name="tasks" checked={true} component={SwitchFormLeft}  message="Projects/Tasks"/>
                            <Field name="time" checked={true} component={SwitchFormLeft}  message="Time"/>
                        </div>
                        <div className="row">
                            <Field name="expenses" checked={true} component={SwitchFormLeft}  message="Expenses"/>
                            <Field name="leave" checked={true} component={SwitchFormLeft}  message="Leave"/>
                        </div>
                        <div className="row">
                            <Field name="reports" checked={true} component={SwitchFormLeft}  message="Reports"/>
                            <Field name="feeds" checked={true} component={SwitchFormLeft}  message="Feeds"/>
                        </div>
                        <div className="row">
                            <Field name="shifts"  component={SwitchFormLeft}  message="My Shifts"/>
                            <Field name="shiftsManager" component={SwitchFormLeft}  message="Shifts Manager"/>
                        </div>
                        <div className="row mt-2">
                            <div className="col-sm-12">
                              <div className="float-right">
                                <button className="btn btn-secondary" type="button" onClick={previousPage} >
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

export default reduxForm({
  form: 'setupWizard',               // <------ same form name
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true  // <------ unregister fields on unmount
})(WorkDetailsForm)
