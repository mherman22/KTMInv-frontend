import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../Form Input/FormInput';
import '../index.css';

export default function Register() {

  const [values, setValues] = useState({
    firstName: "", lastName: "", username: "",
    emailAddress: "", birthDate: "", password: "", confirmPassword: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
  }
  const handleValueChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const inputs = [
    {
      id: 1, name: "firstName", type: "text", placeholder: "First Name",
      error: "Between 3-16 characters & can not have special characters",
      label: "First Name",
      pattern: "^[A-Za-z]{3,16}$",
      required: true
    },
    {
      id: 2, name: "lastName", type: "text", placeholder: "Last Name",
      error: "Between 3-16 characters & can not have special characters",
      label: "Last Name",
      pattern: "^[A-Za-z]{3,16}$",
      required: true
    },
    {
      id: 3, name: "username", type: "text", placeholder: "username",
      error: "Between 3-16 characters & can not have special characters",
      label: "username",
      pattern: "^[a-z0-9]{3,16}$",
      required: true
    },
    {
      id: 4, name: "emailAddress", type: "email", placeholder: "Email Address",
      error: "Provide a valid email address",
      label: "Email Address",
      required: true
    },
    {
      id: 5, name: "birthDate", type: "date", placeholder: "BirthDate",
      label: "BirthDate",
      required: true
    },
    {
      id: 6, name: "password", type: "password", placeholder: "Password",
      error: "Minimum 8 characters,1 uppercase,1 lowercase letter,1 number and 1 special character",
      label: "Password",
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true
    },
    {
      id: 7, name: "confirmPassword", type: "password", placeholder: "Confirm Password",
      error: "Passwords don't match",
      label: "Confirm Password",
      pattern: values.password,
      required: true
    }
  ]

  return (
    <div className='register-form'>
      {/* <h1>User Registration</h1> */}
      <form onSubmit={handleSubmit}>
        {inputs.map(input => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleValueChange}
          />
        ))}
        <button>Register</button>
        <p>Already have an account?  <Link to="/">Sign In</Link></p>
      </form>
    </div>
  );
}
