import React from 'react';
import PropTypes from 'prop-types';
import AddDepartment from './AddDepartment'

const DepartmentActions = (props) => (
  <div className="card-header main-header">
    Departments
    <div className="card-actions">
      {/* <div className="input-group">
        <input type="text" className="form-control" placeholder="Search" />
        <span className="input-group-addon">
         <i className="fa fa-search"></i>
        </span>
      </div>
       <button className="btn-minimize" type="button">
           <i className="fa fa-filter"></i>
       </button> */}
       <span className="partial-border-left" ></span>
       <button className="btn-minimize" onClick={props.addDepartment} type="button">
           <i className="icon-plus"></i>
       </button>
   </div>
   <AddDepartment />
  </div>

);

DepartmentActions.propTypes = {
  addDepartment: PropTypes.func.isRequired
};

export default DepartmentActions
