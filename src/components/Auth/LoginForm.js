import React from 'react';
import Public from '../Public';
import {Field, reduxForm} from 'redux-form'
import FormGroup from '../Commons/FormGroup'
import {required, emailValid} from '../Commons/Validators'
import {Link} from 'react-router-dom';

const LoginForm = (props) => {
    const { errorLogin, handleSubmit, callSubmit,submitting, invalid} = props;
    return (
        <Public>
            <form className="form-pb form-signin" onSubmit={handleSubmit(callSubmit)}>
                <h3 className="mb-2">Sign In</h3>
                <div className="row">
                    <Field className="col-md-12" name="email" type="text" component={FormGroup} label="Email Address" validate={[required, emailValid]}/>
                </div>
                <div className="row">
                    <Field className="col-md-12" name="password" type="password" component={FormGroup} label="Password" validate={required}/>
                </div>

                    <button className="btn btn-primary btn-block" type="submit" disabled={submitting || invalid}>
                        Sign in
                    </button>
                    {errorLogin &&
                      <div className="alert alert-danger mt-2" role="alert">
                         <i className="fa fa-exclamation" aria-hidden="true"></i>
                        <span className="sr-only">Error:</span>
                        &nbsp;{errorLogin}
                      </div>
                    }
                    <hr/>
                    <Link to="/register" className="btn btn-outline-primary btn-block mt-2">
                        Create Account
                    </Link>
                    <Link to="/forgot" className="btn btn-link mt-2">
                        Forgotten your Password?
                    </Link>
            </form>
        </Public>
    )
}
export default reduxForm({
    form: 'loginForm' // a unique identifier for this form
})(LoginForm)
