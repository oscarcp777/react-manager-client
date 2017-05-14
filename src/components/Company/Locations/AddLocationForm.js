import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {ModalBody, ModalFooter} from 'reactstrap';
import FormGroup from '../../Commons/FormGroup'
import {required,emailValid} from '../../Commons/Validators'
import SelectRedux from '../../Commons/SelectRedux'
import SwitchFormRight from '../../Commons/SwitchFormRight'
import Countries from '../../../config/data/Countries'
import LocationPhoto from './LocationsPhoto'

const AddLocationForm =(props) => {
    const {handleSubmit, submitting, invalid} = props
    return (
        <form onSubmit={handleSubmit} className="form-pb">
            <ModalBody>
              <h5 className="mb-2">Enter Details for Location</h5>
              <div className="row">
                <Field className="col-md-6" name="name" type="text" component={FormGroup} label="Location Name"/>
                <Field className="col-md-6" name="code" type="text" component={FormGroup} label="Location Code "/>
              </div>
              <div className="row">
                <Field className="col-md-6" name="telephone" type="number" component={FormGroup} label="Telephone"/>
                <Field className="col-md-6" name="fax" type="number" component={FormGroup} label="Fax"/>
              </div>
              <div className="row">
                <Field className="col-md-6" name="emailAddress" type="text" component={FormGroup} label="Email Address" validate={[required,emailValid]}/>
                <Field name="shiftLocation" checked={false} component={SwitchFormRight}  message="This is a Shift Location"/>
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
              <LocationPhoto />
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
export default reduxForm({form: 'addLocationForm'})(AddLocationForm)
