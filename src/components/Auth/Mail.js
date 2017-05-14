import React from 'react';
import Public from '../Public';
const TxtMsg = ({txt}) => (
  <p className="txt-msg lead">{txt}</p>
)
const Mail = ({match}) => (
  <Public>
    <div className="container">
      <div className="row">
        <div className="col align-self-center">
          <div className="text-center mail">
            <i className="fa fa-envelope-o"></i>
            <h2 className="mb-2">Thank you</h2>
          </div>
        </div>
      </div>
      {match.params.type === 'forgot'?
          <div>
            <TxtMsg txt="We have sent you for recovery your Password"/>
            <TxtMsg txt="please follow instructions within the email"/>
          </div>
        : <div>
          <TxtMsg txt="Your application has been successfully submitted"/>
          <TxtMsg txt="An email will be sent once your account is approved"/>
          <TxtMsg txt="please follow instructions within the email"/>
        </div>
      }
    </div>

  </Public>
)

export default Mail;
