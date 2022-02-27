import React from 'react';
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

function AuthorizationForm(props) {
  function onChangeLogin(event) {
    console.log("Login input: " + event.target.value);
  }
  
  function onChangePassword(event) {
    console.log("Password input: " + event.target.value);
  }

  function onBlurLogin(event) {
    event.target.value = event.target.value.trim();
  }

  const {action, method} = props;
  return (
    <form action={action} method={method} id="authForm">
      <InputFieldWrapper>
        <InputField  id="login" type="text" placeholder="Email or nickname" onChange={onChangeLogin} onBlur={onBlurLogin}>Login</InputField>
      </InputFieldWrapper>
      <InputField  id="password" type="password" placeholder="Password" onChange={onChangePassword}>Password</InputField>
      <SubmitButton form="authForm" className="Button" type="submit">Log In</SubmitButton>
    </form>
  );
}

export default AuthorizationForm;
