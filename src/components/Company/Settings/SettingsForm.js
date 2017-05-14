import React from 'react';
import {Field, reduxForm} from 'redux-form'
import FormGroup from '../../Commons/FormGroup'
import {required} from '../../Commons/Validators'
import TeamSize from '../../../config/data/TeamSize'
import {Currencies,CurrenciesSymbols} from '../../../config/data/Currencies'
import TimeZones from '../../../config/data/TimeZones'
import {Months,Days,FormatDates} from '../../../config/data/Date'
import Languages from '../../../config/data/Languages'
import SelectRedux from '../../Commons/SelectRedux'
import SwitchFormRight from '../../Commons/SwitchFormRight'
import Logo from './Logo'

const SettingsForm = (props) => {
    const {handleSubmit, submitting, invalid} = props
    return (
        <form className="container form-pb" onSubmit={handleSubmit}>
            <div className="row">
                <div className="offset-sm-2 col-lg-8">

                    <h5 className="mb-2">General Settings</h5>
                    <div className="row">
                        <Field className="col-md-6" name="fiscalYear" type="text" options={Months} component={SelectRedux} label="Fiscal Year Starts" validate={required}/>
                        <Field className="col-md-6" name="holidayYear" type="text" options={Months} component={SelectRedux} label="Holiday Year Starts" validate={required}/>
                    </div>
                    <div className="row">
                        <Field className="col-md-6" name="dateFormat" type="text" options={FormatDates} component={SelectRedux} label="Default Date Format" validate={required}/>
                        <Field className="col-md-6" name="language" type="text" options={Languages} component={SelectRedux} label="Default Language"/>
                    </div>
                    <div className="row">
                        <Field className="col-md-6" name="timeZone" type="text" options={TimeZones} component={SelectRedux} label="Default Time Zone" validate={required}/>
                        <Field className="col-md-6" name="numberFormat" type="text" component={FormGroup} label="Default Number Format" validate={required}/>
                    </div>
                    <div className="row">
                        <Field className="col-md-6" name="startWeek" type="text" options={Days} component={SelectRedux} label="Start Week On" validate={required}/>
                        <Field className="col-md-6" name="currency" type="text" options={Currencies} component={SelectRedux} label="Currency" validate={required}/>
                    </div>
                    <div className="row">
                        <Field className="col-md-6" name='teamSize' options={TeamSize} label="Team Size" component={SelectRedux} validate={required}/>
                        <Field className="col-md-6" name="currencySymbol" type="text" options={CurrenciesSymbols} component={SelectRedux} label="Currency Symbol" validate={required}/>
                    </div>
                    <div className="row">
                      <Field component={SwitchFormRight} checked={true} label={"Currencies Code Suffx"} name={"currenciesCode"} message={"Include currency code when account has multiple currencies"} />
                      <Field component={SwitchFormRight} checked={true} label={"Currency Symbol"} name={"currenciesSymbol"} message={"  Place before the amount"} />
                    </div>
                    <div className="row">
                      <Field component={SwitchFormRight} label={"Include Non-working Days As Leaves"} name={"notWorking"} message={"Yes"} />
                    </div>

                    <Logo/>

                    <div className="row mt-2">
                        <div className="col-sm-12">
                          <div className="float-right">
                            <button className="btn btn-secondary" type="submit" disabled={submitting || invalid}>
                                <i className="fa fa-arrow-left" aria-hidden="true"></i>
                                &nbsp; Back
                            </button>
                            {' '}
                            <button className="btn btn-primary" type="submit" disabled={submitting || invalid}>
                                Next &nbsp;
                                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default reduxForm({
    form: 'settingsForm' // a unique identifier for this form
})(SettingsForm)
