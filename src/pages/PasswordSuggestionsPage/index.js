import React from 'react';
import './style.css';
import passwordTable from '../../assets/images/passwordTable.PNG';

function PasswordSuggestionsPage() {
  return (
    <div className='row'>
      <div className='col-6'>
        <div className="row">
          <div className="col-6"><strong>Strong Password:</strong></div>
          <div className="col-6">Khulood is@2001</div>
        </div>
        <div className="row">
          <div className="col-6"><strong>Good Password:</strong></div>
          <div className="col-6">Fatima@2005_</div>
        </div>
        <div className="row">
          <div className="col-6"><strong>Fair Password:</strong></div>
          <div className="col-6">Aisha17</div>
        </div>
        <div className="row">
          <div className="col-6"><strong>Weak Password:</strong></div>
          <div className="col-6">QWERTY</div>
        </div>
      </div>
      <div className='col-6'>
        <img src={passwordTable} alt="logo" />
      </div>
    </div>
  )
}

export default PasswordSuggestionsPage;