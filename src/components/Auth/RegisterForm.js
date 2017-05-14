import React from 'react';
import Public from '../Public';
import {Field, reduxForm} from 'redux-form'
import FormGroup from '../Commons/FormGroup'
import {required, emailValid} from '../Commons/Validators'
import TeamSize from '../../config/data/TeamSize'
import SelectRedux from '../Commons/SelectRedux'

const RegisterForm = (props) => {
    const { handleSubmit, submitting, invalid } = props
  return (
    <Public>
        <form className="form-register form-pb p-0" onSubmit={handleSubmit}>
            <h3 className="mb-2">Register</h3>
            <div className="row">
                <Field className="col-md-6" name="firstName" type="text" component={FormGroup} label="First Name" validate={required}/>
                <Field className="col-md-6" name="lastName" type="text" component={FormGroup} label="Last Name" validate={required}/>
            </div>
            <div className="row">
                <Field className="col-md-6" name="email" type="email" component={FormGroup} label="Email"
                  validate={[ required, emailValid ]} />
                <Field className="col-md-6" name="emailConfirmation" type="email" component={FormGroup} label="Email confirmation" validate={[ required, emailValid ]}/>
            </div>
            <div className="row">
              <Field className="col-md-6" name="Organisation" type="text" component={FormGroup} label="Organisation" validate={required} />
              <Field className="col-md-6" name="webAddress" type="text" component={FormGroup} label="Web address" validate={required} />
            </div>
            <div className="row">
              <Field className="col-md-6" name="Sector" type="text" component={FormGroup} label="Sector" validate={required}/>
              <Field className="col-md-6" name='teamSize' options={TeamSize}  label="Team Size?" component={SelectRedux} validate={required}/>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="checkbox">
                        <label htmlFor="checkbox1">
                            <Field name="tyc" id="tyc" component="input" type="checkbox" validate={required}/>
                            I agree Terms and Privacy
                        </label>
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                <div className="offset-sm-2  col-sm-8 ">
                    <button className="btn btn-lg btn-primary btn-block" type="submit"
                      disabled={submitting || invalid}>
                      Register
                    </button>
                </div>
            </div>
        </form>
    </Public>
)}
export default reduxForm({
  form: 'registerForm' // a unique identifier for this form
})(RegisterForm)
