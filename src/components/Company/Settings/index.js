import React from 'react';
import SettingsForm from './SettingsForm'

const onSubmit = (values) =>{
  console.log('························',values);
}
const Settings = props => (
  <div className="animated fadeIn">
      <div className="card card-default">
          <div className="card-header main-header">
              Settings
          </div>

          <div className="card-block">
              <SettingsForm onSubmit={onSubmit}/>
          </div>
      </div>
  </div>
)

export default Settings
