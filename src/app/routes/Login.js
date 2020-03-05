import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import { navigate } from 'gatsby';
function Login() {
  return (
    <>
      <h1>Log in</h1>
      <LoginForm />
      <div onClick={() => navigate('/app/signup')}>No Login? Sign up here</div>
    </>
  );
}

export default Login;
