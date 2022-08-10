import React, { useState } from 'react';
import '../index.css';
import FormInput from '../Form Input/FormInput';
import { Link } from 'react-router-dom';

export default function Login() {

  const [values, setValues] = useState({
    username: "", password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
  }

  const handleValueChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const LoginInputs = [
    {
      id: 1, name: "username", type: "text", placeholder: "userName",
      error: "Username is required!",
      label: "username",
      required: true
    },
    {
      id: 2, name: "password", type: "password", placeholder: "Password",
      error: "Password is required!",
      label: "Password",
      required: true
    },
  ]

  return (
    <div className='Login-form'>
      <form onSubmit={handleSubmit}>
        {/* <h1>Login</h1> */}
        {LoginInputs.map(input => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleValueChange}
          />
        ))}
        <button>Login</button>
        <p>New User?  <Link to="/register-user">Register</Link></p>
      </form>
    </div>
  )
}
