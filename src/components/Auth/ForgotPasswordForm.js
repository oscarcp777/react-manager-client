import React from 'react';
import Public from '../Public';
import {Field, reduxForm} from 'redux-form'
import FormGroup from '../Commons/FormGroup'
import {required, emailValid} from '../Commons/Validators'
import {Link} from 'react-router-dom';

const ForgotPasswordForm = (props) => {
  const {handleSubmit, submitting, invalid} = props;
  return (
    <Public>
      <form className="form-pb form-signin" onSubmit={handleSubmit}>
        <h3 className="mb-2">Forgot your Password?</h3>
        <p className="txt-msg">Enter your email address and we’ll send a link to reset your password.</p>
        <div className="row">
          <Field className="col-md-12" name="email" type="text" component={FormGroup} label="Email Address" validate={[required, emailValid]}/>
        </div>
        <button className="btn btn-primary btn-block mt-2" type="submit" disabled={submitting || invalid}>Reset</button>
        <hr/>
        <Link to="/login" className="btn btn-outline-primary btn-block mt-2">Cancel</Link>
      </form>
    </Public>
  )
}
export default reduxForm({form: 'forgotPasswordForm'})(ForgotPasswordForm)
