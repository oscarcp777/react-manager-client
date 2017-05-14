import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {required} from '../../Commons/Validators'
import SelectRedux from '../../Commons/SelectRedux'
import FormGroupInline from '../../Commons/FormGroupInline'

const AddPositionForm = (props) => {
    const {handleSubmit, submitting, invalid,users} = props
    return (
        <form className="row form-users" onSubmit={handleSubmit}>
            <Field className="col-md-2" name="firstName" type="text" component={FormGroupInline} label="First Name" validate={required}/>
            <Field className="col-md-2" name="lastName" type="text" component={FormGroupInline} label="Last Name" validate={required}/>
            <Field className="col-md-2" name="position" type="text" component={FormGroupInline} label="Position" validate={required}/>
            <Field className="col-md-3" classLabel="sr-only" name="reportTo" options={users} component={SelectRedux} label="Report To" validate={required}/>

            <div className="col-md-1">
              <button className="btn btn-primary btn-inline" type="submit"
                disabled={submitting || invalid}>
                Add
              </button>
            </div>
        </form>
    )
}
export default reduxForm({form: 'addPositionForm'})(AddPositionForm)
