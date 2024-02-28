import React, { useState, useEffect } from 'react';
import { Toast } from 'colorfultoasts';

import './FormSignIn.css';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { clearState } from '../../../Redux/UserLogin';
import { userLoginauth } from '../../../Redux/UserLogin';

import { useNavigate } from 'react-router-dom'

export function FormSignIn() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();

  const user = useSelector((state) => state.user);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const isFetching = useSelector((state) => state.user.isFetching)

  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const validateEmail = (event) => {
    const email = event.target.value;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!email) {
      setEmailError('Email est vide');
    }
    else if (email && !emailRegex.test(email)) {
      setEmailError('Email non conforme');
    } else {
      setEmailError('');
    }
    setTimeout(() => {
      setEmailError('');
    }, 3000);
  };

  const validatePassword = (event) => {
    const password = event.target.value;
    const passwordRegex = /^(?=.*\d).{8,}$/;
    if (!password) {
      setPasswordError('Password est vide');
    } else if (password && !passwordRegex.test(password)) {
      setPasswordError('Mot de passe non conforme');
    } else {
      setPasswordError('');
    }
    setTimeout(() => {
      setPasswordError('');
    }, 3000);
  };

  const [toast, setToast] = useState({ type: '', message: '', show: false });

  const onSubmit = async (credential) => {
    const response = await dispatch(userLoginauth({ credential, rememberMe }));

    if (response.payload && !response.error) {
      console.log('Login successful');
      console.log(response.payload);
      setCredentials({ email: '', password: '' });

      setToast({ type: 'success', message: 'Connexion réussie !', show: true });

      setTimeout(() => {
        navigate('/User');
      }, 1000);
    } else {
      dispatch(clearState());
      setToast({
        type: 'error', message: 'Connexion impossible, vérifiez vos identifiants', show: true
      });
    }
  };

  const handleCloseToast = () => {
    setToast({ ...toast, show: false });
  };

  return (
    <>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="email" defaultValue={credentials.email}  {...register("email", { required: "Required" })} onBlur={validateEmail}
          />
          {emailError && <p className='error-message'>{emailError}</p>}
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" defaultValue={credentials.password} {...register("password", { required: "Required" })} onBlur={validatePassword}
          />
          {passwordError && <p className='error-message'>{passwordError}</p>}
        </div>

        <div className="input-remember">
          <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(e) => {
            setRememberMe(e.target.checked);
            localStorage.setItem('rememberMe', e.target.checked);
          }} />

          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">
          {user.isFetching ? 'loading...' : 'Sign In'}</button>
        {toast.show && <Toast type={toast.type} message={toast.message} onClose={handleCloseToast} position={{ bottom: '20px', right: '20px' }} />}

      </form>

    </>
  )

}
