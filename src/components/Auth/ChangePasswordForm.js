import React from 'react';
import Public from '../Public';
import {Field, reduxForm} from 'redux-form'
import FormGroup from '../Commons/FormGroup'
import {required} from '../Commons/Validators'
import {Link} from 'react-router-dom';

const ChangePasswordForm = (props) => {
  const {handleSubmit, submitting, invalid} = props;
  return (
    <Public>
      <form className="form-pb form-signin" onSubmit={handleSubmit}>
        <h3 className="mb-2">Change Password</h3>
        <div className="row">
          <Field className="col-md-12" name="oldPwd" type="text" component={FormGroup} label="Password" validate={required}/>
        </div>
        <div className="row">
          <Field className="col-md-12" name="newPwd" type="text" component={FormGroup} label="New Password" validate={required}/>
        </div>
        <div className="row">
          <Field className="col-md-12" name="reNewPwd" type="text" component={FormGroup} label="Reenter Password" validate={required}/>
        </div>
        <button className="btn btn-primary btn-block mt-2" type="submit" disabled={submitting || invalid}>Update</button>
        <hr/>
        <Link to="/login" className="btn btn-outline-primary btn-block mt-2">Cancel</Link>
      </form>
    </Public>
  )
}
export default reduxForm({form: 'changePasswordForm'})(ChangePasswordForm)
