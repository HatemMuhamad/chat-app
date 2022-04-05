import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import "../css/styles.css"

type FormValues = {
  email: string;
  password: string;
};



const Signup = () => {
  const { register, handleSubmit, formState: {errors}} = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = data => {

  };

  return (
    <div className='login_signup_body'>
    <div className="box" id="centered-form">
    <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
      <span className="first_login_header">Welcome!</span>
        <span className="second_login_header">Create your account</span>
      <div className="input-container">
      <input className="form-control"
          {...register("email", { required: 'Email address is required'})} type="email"
          name='username' spellCheck="false" autoCapitalize='off' autoFocus />
          <p className='error-color' role="input-validation">{errors.email?.message}</p>
        <label>Email</label>		
      </div>
      <div className="input-container">		
      <input className="form-control"
          {...register("password", { required: 'Password is required'})}
          id="password" type="password" />
        <p className='error-color' role="input-validation">{errors.password?.message}</p>
        <label>Password</label>
      </div>
      <div className="form-field">
      <button className="center__me button-82-pushable" type="submit" value="Login">
        <span className="button-82-shadow"></span>
        <span className="button-82-edge"></span>
        <span className="button-82-front text">
          Create
        </span>
      </button>
      <span className="create__acc__text">Already have an account?</span>
      <Link to="/login">
          <span className="create__acc__link">Login</span>
      </Link>
    </div>
    </form>
    </div>
    </div>
  );
};
export default Signup;