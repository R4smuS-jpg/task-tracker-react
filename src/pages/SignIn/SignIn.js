import React from "react";

import SignInForm from "components/input/SignInForm/SignInForm";
import Header from "components/Header/Header";
import { SignInFormWrap, SignInWrap } from "pages/SignIn/components";

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
