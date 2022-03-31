import React, { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import styled from "styled-components";
import validateEmail from "../validators/emailValidator.js";
import validatePassword from "../validators/passwordValidator.js";
import validateFieldLength from "../validators/minLengthValidator.js";
import validateAvatarUpload from "../validators/avatarUploadValidator.js";

const SubmitButton = styled(Button)`
  margin-top: 20px;

  width: 4.5em;
  height: 1.4em;

  color: #484f4f;
  background-color: white;

  font-size: 32px;
`;

const P = styled.p`
  font-size: 1.6em;
  color: #f2284e;
`;

const AddAvatarButton = styled(InputField)`
  font-size: 24px;
  color: #484f4f;

  width: 320px;

  border: 2px solid #379683;
  border-radius: 6px;
`;

const AddAvatarButtonWrap = styled.div`
  padding-right: 176px;
`;

const InputFieldWrap = styled.div`
  margin-bottom: 10px;
`;

function SignUpForm({ action, method }) {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nicknameLengthError, setNicknameLengthError] = useState("");
  const [firstNameLengthError, setFirstNameLengthError] = useState("");
  const [lastNameLengthError, setLastNameLengthError] = useState("");
  const [avatarUploadError, setAvatarUploadError] = useState("");
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

  function handleChangeNicknameLength(event) {
    const error = validateFieldLength("Nickname", event.target.value);
    setNicknameLengthError(error);

    if (error === "") {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
  }

  function handleChangeFirstNameLength(event) {
    const error = validateFieldLength("First name", event.target.value);
    setFirstNameLengthError(error);

    if (error === "") {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
  }

  function handleChangeLastNameLength(event) {
    const error = validateFieldLength("Last name", event.target.value);
    setLastNameLengthError(error);

    if (error === "") {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
  }

  function handleChangeFile(event) {
    const error = validateAvatarUpload(event.target.value);
    setAvatarUploadError(error);

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
    <form action={action} method={method} id="signUpForm" encType="multipart/form-data">
      <InputFieldWrap>
        <InputField id="email" type="email" placeholder="Email" onBlur={handleBlur} onChange={handleChangeEmail}>
          Email
        </InputField>
        <P>{emailError}</P>
      </InputFieldWrap>

      <InputFieldWrap>
        <InputField id="nickname" type="text" placeholder="Nickname" onBlur={handleBlur} onChange={handleChangeNicknameLength}>
          Nickname
        </InputField>
        <P>{nicknameLengthError}</P>
      </InputFieldWrap>

      <InputFieldWrap>
        <InputField id="firstName" type="text" placeholder="First name" onBlur={handleBlur} onChange={handleChangeFirstNameLength}>
          First name
        </InputField>
        <P>{firstNameLengthError}</P>
      </InputFieldWrap>

      <InputFieldWrap>
        <InputField id="lastName" type="text" placeholder="Last name" onBlur={handleBlur} onChange={handleChangeLastNameLength}>
          Last name
        </InputField>
        <P>{lastNameLengthError}</P>
      </InputFieldWrap>

      <InputFieldWrap>
        <InputField id="password" type="password" placeholder="Password" onChange={handleChangePassword}>
          Password
        </InputField>
        <P>{passwordError}</P>
      </InputFieldWrap>

      <AddAvatarButtonWrap>
        <AddAvatarButton className="InputField" id="avatar" type="file" onChange={handleChangeFile}>
          Add avatar
        </AddAvatarButton>
        <P>{avatarUploadError}</P>
      </AddAvatarButtonWrap>

      <SubmitButton disabled={buttonState} className="Button" form="signUpForm" type="submit">
        Sign Up
      </SubmitButton>
    </form>
  );
}

export default SignUpForm;
