import React from 'react';
import Header from '../components/Header';
import SignUpForm from '../components/SignUpForm';
import styled from 'styled-components'

const SignUpWrapper = styled.div`
  background-color: #5cdb95;
  color: #fffff0;
  
  min-height: 100vh;
  width: 100vw;

  font-family: 'ZCOOL QingKe HuangYou', cursive;
`

const SignUpFormWrapper = styled.div`
  padding-top: 210px;
  padding-left: 36vw;
`

function SignUp() {
  return (
    <SignUpWrapper>
      <Header>Sign Up Page</Header>
      <SignUpFormWrapper>
        <SignUpForm action="" method=""></SignUpForm>
      </SignUpFormWrapper>
    </SignUpWrapper>
  );
}

export default SignUp;