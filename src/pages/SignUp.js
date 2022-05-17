import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import SignUpForm from "../components/SignUpForm";

const SignUpWrap = styled.div`
  background-color: #5cdb95;
  color: #fffff0;

  min-height: 100vh;
  width: 100vw;

  font-family: "ZCOOL QingKe HuangYou";
`;

const SignUpFormWrap = styled.div`
  padding-top: 18vh;
  padding-left: 36vw;
  padding-right: 38vw;
`;

function SignUp() {
  return (
    <SignUpWrap>
      <Header>Sign Up Page</Header>
      <SignUpFormWrap>
        <SignUpForm />
      </SignUpFormWrap>
    </SignUpWrap>
  );
}

export default SignUp;
