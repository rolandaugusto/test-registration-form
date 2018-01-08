import React from 'react';

export const CustomField = ({ input, label, type, className, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className={className} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)