import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
import {required} from '../../Commons/Validators'
import SelectRedux from '../../Commons/SelectRedux'
import SwitchFormLeft from '../../Commons/SwitchFormLeft'

class SettingsForm extends Component {
    render() {
        const {users, handleSubmit, submitting, invalid,previousPage} = this.props

        return (
            <form className="container form-pb" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="offset-sm-2 col-lg-8">
                      <div className="row">
                          <Field className="col-md-6" name="addUser"  options={users} component={SelectRedux} label="Add New User Based On" />
                      </div>
                        <h6 className="mb-2">Settings Leave</h6>
                        <div className="row">
                            <Field name="authoriseLeave" checked={true} component={SwitchFormLeft}  message="Allowed to authorise leave"/>
                        </div>
                        <h6 className="mt-2">Settings Expenses</h6>
                        <div className="row">
                            <Field name="authoriseExpenses" checked={true} component={SwitchFormLeft}  message="Allowed to Authorise Expenses"/>
                            <Field name="exportExpenses" checked={true} component={SwitchFormLeft}  message="Allowed to export Expenses"/>
                        </div>
                        <div className="row">
                            <Field name="expensesPaid" checked={true} component={SwitchFormLeft}  message="Allowed to mark Expenses as Paid"/>
                        </div>
                        <h6 className="mt-2">Settings Reports</h6>
                        <div className="row">
                            <Field name="viewAllReports" component={SwitchFormLeft}  message="Allowed to view all reports"/>
                            <Field name="viewTheseReports"  component={SwitchFormLeft}  message="Allowed view only these reports"/>
                        </div>
                        <div className="row">
                            <Field name="exportAllReports" checked={true}  component={SwitchFormLeft}  message="Allowed to export all reports"/>
                            <Field className="col-md-6" name="resports" type="text" component={SelectRedux} validate={required}/>
                        </div>
                        <h6 className="mt-2">Settings Projects</h6>
                        <div className="row">
                            <Field name="createProject" checked={true} component={SwitchFormLeft}  message="Allowed to create a project"/>
                            <Field name="deleteProject"  component={SwitchFormLeft}  message="Allowed to Delete Project"/>
                        </div>
                        <div className="row">
                            <Field name="exportBudgets" checked={true} component={SwitchFormLeft}  message="Allowed to export budgets"/>
                            <Field name="amendBudgets" checked={true}  component={SwitchFormLeft}  message="Allowed to amend budgets"/>
                        </div>
                        <h6 className="mt-2">Settings Department</h6>
                        <div className="row">
                            <Field name="viewAllDepartments" checked={true} component={SwitchFormLeft}  message="Allowed to view all Department"/>
                            <Field name="viewTheseDepartments" checked={true}  component={SwitchFormLeft}  message="Allowed to view only these"/>
                        </div>
                        <div className="row">

                          <Field className="offset-sm-6 col-md-6" name="departments" type="text" component={SelectRedux} validate={required}/>
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
})(SettingsForm)
