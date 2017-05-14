import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {ModalBody, ModalFooter} from 'reactstrap';
import FormGroup from '../../Commons/FormGroup'
const validate = values => {
  const errors = {}
  if (!values.current) {
    errors.current = 'Required'
  }
  if (!values.new) {
    errors.new = 'Required'
  }
  if (!values.renter) {
    errors.renter = 'Required'
  }
  if(values.new !== values.renter){
      errors.renter = 'Does not match'
  }
  return errors
}
const ModalChangePwdForm =(props) => {
    const {handleSubmit, submitting, invalid} = props
    return (
        <form onSubmit={handleSubmit} className="form-pb">
            <ModalBody>
                <Field className="col-md-12" name="current" type="password" component={FormGroup} label="Current Password"/>
                <Field className="col-md-12" name="new" type="password" component={FormGroup} label="New Password"/>
                <Field className="col-md-12" name="renter" type="password" component={FormGroup} label="Renter Password"/>
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger btn-block" type="submit"
                disabled={submitting || invalid}>
                Update
              </button>
            </ModalFooter>
        </form>
    )
}
export default reduxForm({
    form: 'modalChangePwdForm',
    validate // a unique identifier for this form
})(ModalChangePwdForm)
