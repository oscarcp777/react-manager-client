import React from 'react';
import PropTypes from 'prop-types';

const SwitchFormRight = (props) => {
  const {label, message, input, checked} = props
  return (
    <div className="form-group col-md-6 ">
      <label className="form-control-label">{label}</label>
      <div className="form-control control-switch">
        <table>
          <tbody>
            <tr>
              <td>
                <label className="switch switch-3d switch-primary">
                  {checked
                    ? <input type="checkbox" {...input} className="switch-input" defaultChecked/>
                    : <input type="checkbox" {...input} className="switch-input"/>}

                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </label>
              </td>
              <td>
                <label className="control-switch-label-right">
                  {message}
                </label>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  )
}

const {string, bool, object} = PropTypes;

SwitchFormRight.propTypes = {
  label: string,
  message: string.isRequired,
  input: object.isRequired,
  checked: bool.isRequired
};

export default SwitchFormRight;
