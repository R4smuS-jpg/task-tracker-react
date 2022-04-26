import React from "react";
import styled from "styled-components";

import SignInForm from "../components/SignInForm";
import Header from "../components/Header";

const SignInWrap = styled.div`
  background-color: #5cdb95;
  color: #fffff0;

  min-height: 100vh;
  width: 100vw;

  font-family: "ZCOOL QingKe HuangYou";
`;

const SignInFormWrap = styled.div`
  padding-top: 30vh;
  padding-left: 36vw;
  padding-right: 38vw;
`;

function SignIn() {
  return (
    <SignInWrap>
      <Header>Sign In Page</Header>
      <SignInFormWrap>
        <SignInForm action="" method="" />
      </SignInFormWrap>
    </SignInWrap>
  );
}

export default SignIn;
