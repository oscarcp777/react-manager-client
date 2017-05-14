import React from 'react';
import PropTypes from 'prop-types';
import AddLocation from './AddLocation'

const LocationActions = (props) => (
  <div className="card-header main-header">
    Locations
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
       <button className="btn-minimize" onClick={props.addLocation} type="button">
           <i className="icon-plus"></i>
       </button>
   </div>
   <AddLocation />
  </div>

);

LocationActions.propTypes = {
  addLocation: PropTypes.func.isRequired
};

export default LocationActions
