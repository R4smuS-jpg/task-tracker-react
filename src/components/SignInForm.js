import React, { useState, useEffect } from 'react';
import InputField from './InputField';
import styled from 'styled-components'
import Button from './Button';
import validateEmail from '../validators/emailValidator.js'
import validatePassword from '../validators/passwordValidator.js'

const SubmitButton = styled(Button)`
  margin-top: 10px;

  width: 160px;
  height: 48px;

  color: #484f4f;
  background-color: white;

  font-size: 32px;
` 

const P = styled.p`
  font-size: 1.8em;
  color: #C24641;
`

const InputFieldWrap = styled.div`
  margin-bottom: 10px;
`

function SignInForm({action, method}) {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleChangeEmail(event) {
    setEmailError(validateEmail(event.target.value));
  }

  function handleChangePassword(event) {
    setPasswordError(validatePassword(event.target.value));
  }

  function handleBlur(event) {
    event.target.value = event.target.value.trim();
  }

  return (
    <form action={action} method={method} id="signInForm">
      <InputFieldWrap>
        <InputField id="login" type="text" placeholder="Email" onBlur={handleBlur} onChange={handleChangeEmail}>Login</InputField>
        <P>{emailError}</P>
      </InputFieldWrap>

      <InputFieldWrap>
        <InputField id="password" type="password" placeholder="Password" onChange={handleChangePassword}>Password</InputField>
        <P>{passwordError}</P>
      </InputFieldWrap>

      <SubmitButton form="signInForm" className="Button" type="submit">Sign In</SubmitButton>
    </form>
  );
}

export default SignInForm;
