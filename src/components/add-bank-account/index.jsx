import React from 'react';
import './styles.css';
import { Field } from 'redux-form';
import deleteIcon from './../../icons/rubbish-bin.svg';

export default function BankAccount ({ id }) {
  return (
    <div className="bankAccount">
      <div>
        <label>IBAN</label>
        <div className="ibanField">
          <Field
            className="inputField"
            name={`iban-${id}`}
            component="input"
            type="text"
          />
          <img className="deleteIcon" height='20px' src={deleteIcon} />
        </div>
      </div>
      <div>
        <label>Bank Name</label>
        <div>
          <Field
            className="inputField"
            name={`bankName-${id}`}
            component="input"
            type="text"
          />
        </div>
      </div>
    </div>
  )
};