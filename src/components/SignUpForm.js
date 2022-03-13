import React from 'react';
import Button from './Button';
import InputField from './InputField';
import styled from 'styled-components'

const SubmitButton = styled(Button)`
  margin-top: 20px;

  width: 160px;
  height: 48px;

  color: #484f4f;
  background-color: white;

  font-size: 32px;
` 
function onBlurTrim(event) {
  event.target.value = event.target.value.trim()
}

function SignUpForm({action, method}) {
  return (
    <form action={action} method={method} id="signUpForm">
      <InputField id="email" type="email" placeholder="Email" onBlur={onBlurTrim}>Email</InputField>
      <InputField id="nickname" type="text" placeholder="Nickname" onBlur={onBlurTrim}>Nickname</InputField>
      <InputField id="firstName" type="text" placeholder="First name" onBlur={onBlurTrim}>First name</InputField>
      <InputField id="lastName" type="text" placeholder="Last name" onBlur={onBlurTrim}>Last name</InputField>
      <InputField id="password" type="password" placeholder="Password">Password</InputField>
      <SubmitButton className="Button" form="signUpForm" type="submit">Sign Up</SubmitButton>
    </form>
  );
}

export default SignUpForm;
