import React from 'react';
import InputField from './InputField';
import styled from 'styled-components'
import Button from './Button';


const Form = styled.form`
  padding-top: 270px;
  padding-left: 36vw;
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

  return (
    <Form action={props.action} method={props.method} id="authForm">
      <p><InputField fieldName="Login" id="login" type="text" placeholder="Email or nickname" onChange={onChangeLogin} onBlur={onBlurLogin}></InputField></p>
      <p><InputField fieldName="Password" id="password" type="password" placeholder="Password" onChange={onChangePassword}></InputField></p>
      <Button form="authForm" type="submit" buttonText="Log In"></Button>
    </Form>
  );
}

export default AuthorizationForm;
