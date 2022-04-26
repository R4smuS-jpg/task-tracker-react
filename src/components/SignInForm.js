import React, { useState } from "react";
import styled from "styled-components";

import InputField from "./InputField";
import Button from "./Button";

import validateEmail from "../validators/emailValidator.js";
import validatePassword from "../validators/passwordValidator.js";

const SubmitButton = styled(Button)`
  margin-top: 10px;

  width: 4.5em;
  height: 1.4em;

  color: #484f4f;
  background-color: white;

  font-size: 32px;
`;

const P = styled.p`
  font-size: 1.8em;
  color: #c24641;
`;

const InputFieldWrap = styled.div`
  margin-bottom: 10px;
`;

function SignInForm({ action, method }) {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [buttonState, setButtonState] = useState(true);

  function handleChangeEmail(event) {
    const error = validateEmail(event.target.value);
    setEmailError(error);

    if (error === "") {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
  }

  function handleChangePassword(event) {
    const error = validatePassword(event.target.value);
    setPasswordError(error);

    if (error === "") {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
  }

  function handleBlur(event) {
    event.target.value = event.target.value.trim();
  }

  return (
    <form action={action} method={method} id="signInForm">
      <InputFieldWrap>
        <InputField id="email" type="email" placeholder="Email" onBlur={handleBlur} onChange={handleChangeEmail}>
          Email
        </InputField>
        <P>{emailError}</P>
      </InputFieldWrap>

      <InputFieldWrap>
        <InputField id="password" type="password" placeholder="Password" onChange={handleChangePassword}>
          Password
        </InputField>
        <P>{passwordError}</P>
      </InputFieldWrap>

      <SubmitButton disabled={buttonState} form="signInForm" className="Button" type="submit">
        Sign In
      </SubmitButton>
    </form>
  );
}

export default SignInForm;
