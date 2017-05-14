import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'

const Wizard = (props) => (
  <div className="breadcrumb wizard">
    <span className={classnames('wizard-item', { 'active': props.page === 1 })}>
      <span className="wizard-pill ">1</span>
      <span className="wizard-text">
        User Details
      </span>
    </span>
  <span className={classnames('wizard-item', { 'active': props.page === 2 })}>
      <span className="wizard-pill">2</span>
      <span className="wizard-text">
        Work Details
      </span>
    </span>
    <span className={classnames('wizard-item', { 'active': props.page === 3 })}>
      <span className="wizard-pill">3</span>
      <span className="wizard-text">
        Settings
      </span>
    </span>

  </div>
)

Wizard.propTypes = {
  page:PropTypes.number
};

export default Wizard;
