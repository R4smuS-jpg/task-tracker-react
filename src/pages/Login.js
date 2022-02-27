import React from 'react';
import styled from 'styled-components';
import AuthorizationForm from '../components/AuthorizationForm';
import Header from '../components/Header';

const LoginWrapper = styled.div`
  background-color: #5cdb95;
  color: #fffff0;
  
  min-height: 100vh;
  width: 100vw;

  font-family: 'ZCOOL QingKe HuangYou', cursive;
`

const AuthorizationFormWrapper = styled.div`
  padding-top: 270px;
  padding-left: 36vw;
`

function Login() { 
  return (
    <LoginWrapper>
      <Header/>
      <AuthorizationFormWrapper>
        <AuthorizationForm action="" method=""/>
      </AuthorizationFormWrapper>
    </LoginWrapper>
  );
}

export default Login;
