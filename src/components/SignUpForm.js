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

const AddAvatarButtonWrapper = styled.div`
  padding-right: 136px;
`

const AddAvatarButton = styled(InputField)`
  font-size: 24px;
  color: #484f4f;
  
  width: 360px;

  border: 2px solid #379683;
  border-radius: 8px;
`

const InputFieldWrapper = styled.div`
  margin-bottom: 10px;
`

function SignUpForm({action, method}) {
  function onBlurTrim(event) {
    event.target.value = event.target.value.trim()
  }

  return (
    <form action={action} method={method} id="signUpForm" enctype="multipart/form-data">
      <InputFieldWrapper>
        <InputField id="email" type="email" placeholder="Email" onBlur={onBlurTrim}>Email</InputField>
      </InputFieldWrapper>
      <InputFieldWrapper>
        <InputField id="nickname" type="text" placeholder="Nickname" onBlur={onBlurTrim}>Nickname</InputField>
      </InputFieldWrapper>
      <InputFieldWrapper>
        <InputField id="firstName" type="text" placeholder="First name" onBlur={onBlurTrim}>First name</InputField>
      </InputFieldWrapper>
      <InputFieldWrapper>
        <InputField id="lastName" type="text" placeholder="Last name" onBlur={onBlurTrim}>Last name</InputField>
      </InputFieldWrapper>
      <InputFieldWrapper>
        <InputField id="password" type="password" placeholder="Password">Password</InputField>
      </InputFieldWrapper>
      <AddAvatarButtonWrapper>
        <AddAvatarButton className="InputField" id="avatar" type="file" accept="image/png, image/jpeg">Add avatar</AddAvatarButton>
      </AddAvatarButtonWrapper>
      <SubmitButton className="Button" form="signUpForm" type="submit">Sign Up</SubmitButton>
    </form>
  );
}

export default SignUpForm;
