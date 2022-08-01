import React, {useState} from 'react';
import FormInput from '../Form Input/FormInput';
import inputs from './inputs';

export default function Register() {

  const [values, setValues] = useState({firstName:"", lastName:"", username:"", 
        emailAddress:"", birthDate:"", password:"", confirmPassword:""});

  const handleSubmit = e => {
    e.preventDefault();
  }
  const handleValueChange = e => {
     setValues({...values,[e.target.name]: e.target.value});
  }

  console.log(values);

  return (
    <div className='register-form'>
        <form onSubmit={handleSubmit}>
          <h1>User Registration</h1>
          {inputs.map(input => (
            <FormInput 
                key={input.id} 
                {...input} 
                value={values[input.name]} 
                onChange={handleValueChange} 
            />
          ))}
          <button>Register</button>
        </form>
    </div>
  );
}
