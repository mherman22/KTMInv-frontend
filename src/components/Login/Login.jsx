import React, { useState } from 'react';
import FormInput from '../Form Input/FormInput';
import LoginInputs from '../Access/inputs/LoginInputs';

export default function Login() {

  const [values, setValues] = useState({
    username:"",password:""
  });

  const handleSubmit = e => {
    e.preventDefault();
  }

  const handleValueChange = e => {
    setValues({...values,[e.target.name]: e.target.value});
 }

  return (
    <div className='Login-form'>
        <form onSubmit={handleSubmit}>
        <h1>User Login</h1>
          {LoginInputs.map(input =>(
            <FormInput 
            key={input.id} 
            {...input} 
            value={values[input.name]} 
            onChange={handleValueChange}
            />
          ))}
          <button>Login</button>
        </form>
    </div>
  )
}
