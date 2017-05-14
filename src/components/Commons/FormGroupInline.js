import React, { PropTypes } from 'react';
import classnames from 'classnames'

const FormGroupInline = (props)=> {
    const {input, label, type, className, meta: {  touched,  error  }} = props
    return(
      <div className={classnames(`${className}`, { 'has-danger': touched && error })}>
        <input {...input} placeholder={label} type={type} className="form-control mb-2 mr-sm-2 mb-sm-0"/>
        {touched && ((error &&   <div className="form-control-feedback">{error}</div>))}
      </div>
    )
}
const { string, object } = PropTypes;

FormGroupInline.propTypes = {
  type: string.isRequired,
  meta: object.isRequired
};

export default FormGroupInline;
