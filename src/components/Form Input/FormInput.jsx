import React, { useState } from 'react';
import "./FormInput.css";

export default function FormInput(props) {

    const {label, onChange, error, id,...inputProps} = props;
    
    const [focus,setFocus] = useState(false);

    const handleBlur = e => {
      setFocus(true);
    }

  return (
    <div className='form-input'>
        <label>{label}</label>
        <input 
            {...inputProps} 
            onChange={onChange} 
            onBlur={handleBlur}
            focus={focus.toString()}
        />
        <span>{error}</span>
    </div>
  )
}
