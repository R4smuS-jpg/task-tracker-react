import React from 'react';
import InputField from './InputField';
import styled from 'styled-components'
import Button from './Button';


const Form = styled.form`
  padding-top: 200px;
  padding-left: 35vw;
`

function AuthorizationForm(props) {
  return (
    <Form action={props.action} method={props.method} id="authForm">
      <p><InputField fieldName="Login" id="login" type="text" placeholder="Email or nickname"></InputField></p>
      <br></br>
      <p><InputField fieldName="Password" id="password" type="password" placeholder="Password"></InputField></p>
      <br></br>
      <br></br>
      <p><Button form="authForm" type="submit" buttonText="Log In"></Button></p>
    </Form>
  );
}

export default AuthorizationForm;
