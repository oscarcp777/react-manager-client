import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import classnames from 'classnames'

class DatePickerGroup extends Component {


  render() {
    const { label, input, className,  meta: {  touched,  error  }} = this.props
    return (

      <div className={classnames(`form-group date-picker-group ${className}`, { 'has-danger': touched && error })}>
         {label && <label className="form-control-label">{label}</label>}
         <div className="controls">
               <div className="input-group">
                 <DatePicker {...input}
                   dateForm="DD/MM/YYYY"
                   selected={input.value ? moment(input.value,"DD/MM/YYYY") : moment()}
                   className="form-control"
                   calendarClassName="date-picker-calendar"/>
                 <span className="input-group-addon"><i className="fa fa-calendar"></i> </span>
               </div>
         </div>
            {touched && ((error &&   <div className="form-control-feedback">{error}</div>))}

      </div>
        )

  }
}
export default DatePickerGroup;
