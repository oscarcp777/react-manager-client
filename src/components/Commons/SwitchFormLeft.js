import React from 'react';
import PropTypes from 'prop-types';

const SwitchFormLeft = (props) => {
  const {
    label,
    message,
    input,
    checked
  } = props
  return (
    <div className="form-group col-md-6 mb-0">
      {label && <label className="form-control-label">{label}</label>}
      <div className="form-control control-switch">
        <label className="control-switch-label-left">
          {message}
        </label>
        <label className="switch switch-3d switch-primary pull-right">
          {checked
            ?<input type="checkbox" {...input}  className="switch-input" defaultChecked/>
            :<input type="checkbox" {...input}  className="switch-input"/>}
          <span className="switch-label"></span>
          <span className="switch-handle"></span>
        </label>

      </div>
    </div>
  )
}

const {string, bool, object} = PropTypes;

SwitchFormLeft.propTypes = {
  label: string,
  message: string.isRequired,
  input: object.isRequired,
  checked : bool.isRequired
};

export default SwitchFormLeft;
