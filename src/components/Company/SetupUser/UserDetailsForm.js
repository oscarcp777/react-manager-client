import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
import FormGroup from '../../Commons/FormGroup'
import {required} from '../../Commons/Validators'
import SelectRedux from '../../Commons/SelectRedux'
import Countries from '../../../config/data/Countries'
import Profile from './Profile'

const titles =[
  {value:'Mr',label:'Mr'},
  {value:'Ms',label:'Ms'},
  {value:'Mrs',label:'Mrs'}
]
class UserDetailsForm extends Component {


    render() {
        const {users, handleSubmit, submitting, invalid} = this.props

        return (
            <form className="container form-pb" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="offset-sm-2 col-lg-8">
                      <div className="row">
                          <Field className="col-md-6" name="addUser"  options={users} component={SelectRedux} label="Add New User Based On" />
                      </div>
                        <h5 className="mb-2">User Details</h5>
                        <div className="row">
                            <Field className="col-md-6" name="title"  options={titles} component={SelectRedux} label="Title" validate={required}/>
                            <Field className="col-md-6" name="firstName" type="text" component={FormGroup} label="Fist Name" validate={required}/>
                        </div>
                        <div className="row">
                            <Field className="col-md-6" name="lastName" type="text" component={FormGroup} label="Last Name" validate={required}/>
                            <Field className="col-md-6" name="email" type="email" component={FormGroup} disabled={true} label="Email Address/User Login ID"/>
                        </div>
                        <div className="row">
                            <Field className="col-md-6" name="telephoneNo" type="number" component={FormGroup} label="Telephone No." validate={required}/>
                            <Field className="col-md-6" name="ext" type="number" component={FormGroup} label="Ext" validate={required}/>
                        </div>
                        <div className="row">
                            <Field className="col-md-6" name="faxNo" type="number" component={FormGroup} label="Fax No." validate={required}/>
                            <Field className="col-md-6" name="phoneNumber" type="number" component={FormGroup} label="Mobile No." validate={required}/>
                        </div>
                        <div className="row">
                            <Field className="col-md-6" name="location" type="text" options={Countries} component={SelectRedux} label="Location" validate={required}/>
                            <Field className="col-md-6" name="position" type="text" component={FormGroup} label="Position" validate={required}/>
                        </div>
                        <div className="row">
                            <Field className="col-md-12" name="department" type="text" component={FormGroup} label="Department" validate={required}/>
                        </div>
                        <h5 className="mb-2">Managers</h5>
                        <div className="row">
                            <Field className="col-md-6" name="manager" type="text" component={FormGroup} label="Line Manager" validate={required}/>
                            <Field className="col-md-6" name="reportTo" options={users} component={SelectRedux} label="Leave Reports To" validate={required}/>
                        </div>
                        <div className="row">
                            <Field className="col-md-6" name="reportTo" options={users} component={SelectRedux} label="Expenses Reports To" validate={required}/>
                        </div>
                        <h5 className="mb-2">Profile Image</h5>

                        <Profile/>

                        <div className="row mt-2">
                            <div className="col-sm-12">
                              <div className="float-right">
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
})(UserDetailsForm)
