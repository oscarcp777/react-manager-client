import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {ModalBody, ModalFooter} from 'reactstrap';
import FormGroup from '../../Commons/FormGroup'
import {required,emailValid} from '../../Commons/Validators'
import SelectRedux from '../../Commons/SelectRedux'
import SwitchFormRight from '../../Commons/SwitchFormRight'
import Countries from '../../../config/data/Countries'
import DepartmentPhoto from './DepartmentPhoto'

const AddDepartmentForm =(props) => {
    const {handleSubmit, submitting, invalid, users} = props
    console.log('%%%%%%%%%%% AddDepartmentForm %%%%%%%%%%%%%');
    console.log(props);
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%');
    return (
        <form onSubmit={handleSubmit} className="form-pb">
            <ModalBody>
              <h5 className="mb-2">Enter Details for Department</h5>
              <div className="row">
                <Field className="col-md-6" name="name" type="text" component={FormGroup} label="Department Name"/>
                <Field className="col-md-6" name="code" type="text" component={FormGroup} label="Department Code "/>
              </div>
              <div className="row">
                <Field className="col-md-6" name="telephone" type="number" component={FormGroup} label="Telephone"/>
                <Field className="col-md-6" name="fax" type="number" component={FormGroup} label="Fax"/>
              </div>
              <div className="row">
                <Field className="col-md-6" name="emailAddress" type="text" component={FormGroup} label="Email Address" validate={[required,emailValid]}/>
                <Field name="shiftDepartment" checked={false} component={SwitchFormRight}  message="This is a Shift Department"/>
              </div>
              <div className="row">
                <Field className="col-md-6" name="postCode2" type="text" component={FormGroup} label="Post Code/Zip Code"/>
                <div className="col-md-6 mt-2">
                  <button className="btn btn-primary btn-block">
                  Find Address
                 </button>
              </div>
              </div>
              <div className="row">
                  <Field className="col-md-6" name="firstLine" type="text" component={FormGroup} label="1st Line of the Address" validate={required}/>
                  <Field className="col-md-6" name="secondLine" type="text" component={FormGroup} label="2st Line of the Address" validate={required}/>
              </div>
              <div className="row">
                  <Field className="col-md-6" name="city" type="text" component={FormGroup} label="City/Town" validate={required}/>
                  <Field className="col-md-6" name="state" type="text" component={FormGroup} label="County/State" validate={required}/>
              </div>
              <div className="row">
                  <Field className="col-md-6" name="postCode" type="text" component={FormGroup} label="Post Code/Zip Code" validate={required}/>
                  <Field className="col-md-6" name="country" type="text" options={Countries} component={SelectRedux} label="Country" validate={required}/>
              </div>
              <DepartmentPhoto />
              <div className="row">
                  <Field className="col-md-6" name="addManager" options={users} component={SelectRedux} label="Add Manager" validate={required}/>
                  <Field className="col-md-6" name="addUser"  options={users} component={SelectRedux} label="Add Users" validate={required}/>
              </div>
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger btn-block" type="submit"
                disabled={submitting || invalid}>
                Save
              </button>
            </ModalFooter>

        </form>
    )
}
export default reduxForm({form: 'addDepartmentForm'})(AddDepartmentForm)
