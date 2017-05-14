import React from 'react';
import {Field, reduxForm} from 'redux-form'
import classnames from 'classnames'
import {required} from '../../Commons/Validators'

const FormGroupInline = (props)=> {
    const {input, label, type,  meta: {  touched,  error  }} = props
    return(
      <div className={classnames("col-md-2", { 'has-danger': touched && error })}>
        <input {...input} placeholder={label} type={type} className="form-control mb-2 mr-sm-2 mb-sm-0"/>
        {touched && ((error &&   <div className="form-control-feedback">{error}</div>))}
      </div>
    )
}
const AddUserForm = (props) => {
    const {handleSubmit, submitting, invalid} = props
    return (
        <form className="row form-users" onSubmit={handleSubmit}>
            <Field name="firstName" type="text" component={FormGroupInline} label="First Name" validate={required}/>
            <Field name="lastName" type="text" component={FormGroupInline} label="Last Name" validate={required}/>
            <Field name="position" type="text" component={FormGroupInline} label="Position" validate={required}/>
            <Field name="department" type="text" component={FormGroupInline} label="Apartament" validate={required}/>
            <div className="col-md-2">
              <button className="btn btn-primary btn-inline" type="submit"
                disabled={submitting || invalid}>
                Add
              </button>
            </div>
        </form>
    )
}
export default reduxForm({form: 'addUserForm'})(AddUserForm)
