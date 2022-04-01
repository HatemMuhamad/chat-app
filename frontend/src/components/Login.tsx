import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pic from "./common/login_bg.jpeg";
import "../css/styles.css"

type FormValues = {
  email: string;
  password: string;
};



const Login = () => {
  const { register, handleSubmit, formState: {errors}} = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = data => {

  };

  return (
    <body>
    <div className="box" id="centered-form">
    <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
      <span className="first_login_header">Welcome back!</span>
        <span className="second_login_header">Login to your account</span>
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
          Login now
        </span>
      </button>
      <span className="create__acc__text">Don't have an account? Create now</span>
    </div>
    </form>
    </div>
    </body>
  );
};
export default Login;