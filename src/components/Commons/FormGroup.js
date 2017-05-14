import React, { PropTypes } from 'react';
import classnames from 'classnames'
const FormGroup = (props) => {
  const {input, placeholder,disabled, label, type, className,  meta: {  touched,  error  }} = props
  return(
     <div className={classnames(`form-group ${className}`, { 'has-danger': touched && error })}>
        {label && <label className="form-control-label">{label}</label>}
        <input {...input} disabled={disabled} placeholder={placeholder?placeholder:label} type={type} className="form-control"/>
        {touched && ((error &&   <div className="form-control-feedback">{error}</div>))}

    </div>
  )}


const { string, object } = PropTypes;

FormGroup.propTypes = {
  label: string,
  type: string.isRequired,
  meta: object.isRequired
};

export default FormGroup;
