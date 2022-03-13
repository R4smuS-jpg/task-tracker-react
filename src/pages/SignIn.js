import React from 'react';
import styled from 'styled-components';
import SignInForm from '../components/SignInForm';
import Header from '../components/Header';

const SignInWrapper = styled.div`
  background-color: #5cdb95;
  color: #fffff0;
  
  min-height: 100vh;
  width: 100vw;

  font-family: 'ZCOOL QingKe HuangYou', cursive;
`

const SignInFormWrapper = styled.div`
  padding-top: 270px;
  padding-left: 36vw;
`

function SignIn() { 
  return (
    <SignInWrapper>
      <Header>Sign In Page</Header>
      <SignInFormWrapper>
        <SignInForm action="" method=""/>
      </SignInFormWrapper>
    </SignInWrapper>
  );
}

export default SignIn;
