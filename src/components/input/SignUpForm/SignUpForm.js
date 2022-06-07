import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import InputField from "components/input/InputField/InputField";
import signUp from "api/mutations/signUp";

import validateEmail from "validators/emailValidator.js";
import validatePassword from "validators/passwordValidator.js";
import validateFieldLength from "validators/minLengthValidator.js";
import validateAvatarUpload from "validators/avatarUploadValidator.js";

import { useApolloClient } from "@apollo/client";
import useAuthUser from "api/AuthUser";

import { InputFieldWrap } from "components/input/SignUpForm/components";
import { AddAvatarButtonWrap, P, AddAvatarButton, SubmitButton } from "components/input/SignUpForm/components";

const INITIAL_FORM_STATE = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
};

function SignUpForm() {
  // hooks
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstNameLengthError, setFirstNameLengthError] = useState("");
  const [lastNameLengthError, setLastNameLengthError] = useState("");
  const [avatarUploadError, setAvatarUploadError] = useState("");

  function useHandleChangeField(stateSetter) {
    return useCallback((event) => {
      const { value, id } = event.target;

      switch (id) {
        case "email":
          handleChangeEmail(value);
          break;
        case "password":
          handleChangePassword(value);
          break;
        case "firstName":
          handleChangeFirstNameLength(value);
          break;
        case "lastName":
          handleChangeLastNameLength(value);
          break;
        case "avatar":
          handleChangeFile(value);
      }

      stateSetter((currentState) => ({
        ...currentState,
        [id]: value,
      }));
    }, []);
  }

  const [formState, setFormState] = useState(INITIAL_FORM_STATE);

  // handlers
  function handleChangeEmail(value) {
    const error = validateEmail(value);
    setEmailError(error);
  }

  function handleChangePassword(value) {
    const error = validatePassword(value);
    setPasswordError(error);
  }

  function handleChangeFirstNameLength(value) {
    const error = validateFieldLength("First name", value);
    setFirstNameLengthError(error);
  }

  function handleChangeLastNameLength(value) {
    const error = validateFieldLength("Last name", value);
    setLastNameLengthError(error);
  }

  function handleChangeFile(value) {
    const error = validateAvatarUpload(value);
    setAvatarUploadError(error);
  }

  function handleBlur(event) {
    event.target.value = event.target.value.trim();
  }

  const { isLoading, user } = useAuthUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading === false && user) {
      navigate("/", { replace: true });
    }
  }, [isLoading, user]);

  const client = useApolloClient();
  const handleSignUp = async (event) => {
    event.preventDefault();
    await signUp(client, formState);
  };

  return (
    <form>
      <InputFieldWrap>
        <InputField
          id="email"
          type="email"
          placeholder="Email"
          onBlur={handleBlur}
          onChange={useHandleChangeField(setFormState)}
          value={formState.email}
        >
          Email
        </InputField>
        <P>{emailError}</P>
      </InputFieldWrap>

      <InputFieldWrap>
        <InputField
          id="firstName"
          type="text"
          placeholder="First name"
          onBlur={handleBlur}
          onChange={useHandleChangeField(setFormState)}
          value={formState.firstName}
        >
          First name
        </InputField>
        <P>{firstNameLengthError}</P>
      </InputFieldWrap>

      <InputFieldWrap>
        <InputField
          id="lastName"
          type="text"
          placeholder="Last name"
          onBlur={handleBlur}
          onChange={useHandleChangeField(setFormState)}
          value={formState.lastName}
        >
          Last name
        </InputField>
        <P>{lastNameLengthError}</P>
      </InputFieldWrap>

      <InputFieldWrap>
        <InputField
          id="password"
          type="password"
          placeholder="Password"
          onChange={useHandleChangeField(setFormState)}
          value={formState.password}
        >
          Password
        </InputField>
        <P>{passwordError}</P>
      </InputFieldWrap>

      <AddAvatarButtonWrap>
        <AddAvatarButton className="InputField" id="avatar" type="file" onChange={useHandleChangeField(setFormState)}>
          Add avatar
        </AddAvatarButton>
        <P>{avatarUploadError}</P>
      </AddAvatarButtonWrap>

      <SubmitButton
        disabled={emailError || firstNameLengthError || lastNameLengthError || passwordError || avatarUploadError || isLoading}
        className="Button"
        type="submit"
        onClick={handleSignUp}
      >
        Sign Up
      </SubmitButton>
    </form>
  );
}

export default SignUpForm;
