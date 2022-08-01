import React from 'react';
import "./FormInput.css";

export default function FormInput(props) {
    const {label, onChange, error, id,...inputProps} = props;
  return (
    <div className='form-input'>
        <label>{label}</label>
        <input {...inputProps} onChange={onChange}/>
        <span>{error}</span>
    </div>
  )
}
 