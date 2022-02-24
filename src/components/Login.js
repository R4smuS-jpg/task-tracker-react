import React from 'react';
import AuthorizationForm from './AuthorizationForm';
import Header from './Header';

function Login() { 
  return (
    <div className="Login">
      <Header></Header>
      <AuthorizationForm action="" method=""></AuthorizationForm>
    </div>
  );
}

export default Login;
