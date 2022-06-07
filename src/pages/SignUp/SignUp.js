import React from "react";

import Header from "components/Header/Header";
import SignUpForm from "components/input/SignUpForm/SignUpForm";

import { SignUpWrap, SignUpFormWrap } from "pages/SignUp/components";

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
