import React, { useState } from 'react';
import "../index.css";

export default function FormInput(props) {

  const { label, onChange, error, id, ...inputProps } = props;

  const [focus, setFocus] = useState(false);

  const handleBlur = e => {
    setFocus(true);
  }

  return (
    <div className='form-input'>
      <label>{label}</label>
      <input className='input-form'
        {...inputProps}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={() => inputProps.name === "confirmPassword" && setFocus(true)}
        focus={focus.toString()}
      />
      <span>{error}</span>
    </div>
  )
}
