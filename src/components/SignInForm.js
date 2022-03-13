import React, { useState, useEffect } from 'react';
import InputField from './InputField';
import styled from 'styled-components'
import Button from './Button';

const SubmitButton = styled(Button)`
  margin-top: 20px;

  width: 160px;
  height: 48px;

  color: #484f4f;
  background-color: white;

  font-size: 32px;
` 

const InputFieldWrapper = styled.div`
  margin-bottom: 10px;
`

function SignInForm({action, method}) {
  function onBlurTrim(event) {
    event.target.value = event.target.value.trim();
  }

  return (
    <form action={action} method={method} id="signInForm">
      <InputFieldWrapper>
        <InputField id="login" type="text" placeholder="Email or nickname" onBlur={onBlurTrim}>Login</InputField>
      </InputFieldWrapper>
      <InputField id="password" type="password" placeholder="Password">Password</InputField>
      <SubmitButton form="signInForm" className="Button" type="submit">Sign In</SubmitButton>
    </form>
  );
}

export default SignInForm;
