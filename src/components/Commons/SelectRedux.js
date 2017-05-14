import React from 'react';
import Select from 'react-select';
import classnames from 'classnames'

const SelectRedux = (props) => {
  const {input, label, className,classLabel, options,  meta: {  touched,  error  }} = props
  return (
      <div className={classnames(`form-group ${className}`, { 'has-danger': touched && error })}>
            {label && <label className={classnames(`form-control-label ${classLabel}`)}>{label}</label>}

            <Select value={input.value} options={options}
              onChange={(value) => input.onChange(value)}  onBlur={() => input.onBlur(input.value)} />

          {touched && ((error &&   <div className="form-control-feedback">{error}</div>))}
        </div>
  )};
export default SelectRedux;
