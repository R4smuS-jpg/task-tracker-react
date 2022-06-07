import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useApolloClient } from "@apollo/client";
import signIn from "api/mutations/signIn";
import useAuthUser from "api/AuthUser";

import InputField from "components/input/InputField/InputField";

import validateEmail from "validators/emailValidator.js";
import validatePassword from "validators/passwordValidator.js";
import { InputFieldWrap, P, SubmitButton } from "components/input/SignInForm/components";

const INITIAL_FORM_STATE = { email: "", password: "" };

function SignInForm() {
  // hooks
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
      }

      stateSetter((currentState) => ({
        ...currentState,
        [id]: value,
      }));
    }, []);
  }

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

  // other functions
  function handleBlur(event) {
    event.target.value = event.target.value.trim();
  }

  const { user, isLoading } = useAuthUser();
  const client = useApolloClient();
  const handleSignIn = async (event) => {
    event.preventDefault();
    await signIn(client, formState);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (isLoading === false && user) {
      navigate("/", { replace: true });
    }
  }, [isLoading, user]);

  return (
    <form id="signInForm">
      <InputFieldWrap>
        <InputField
          id="email"
          type="email"
          placeholder="Email"
          value={formState.email}
          onBlur={handleBlur}
          onChange={useHandleChangeField(setFormState)}
        >
          Email
        </InputField>
        <P>{emailError}</P>
      </InputFieldWrap>

      <InputFieldWrap>
        <InputField
          id="password"
          type="password"
          placeholder="Password"
          value={formState.password}
          onChange={useHandleChangeField(setFormState)}
        >
          Password
        </InputField>
        <P>{passwordError}</P>
      </InputFieldWrap>

      <SubmitButton disabled={emailError || passwordError} form="signInForm" className="Button" type="submit" onClick={handleSignIn}>
        Sign In
      </SubmitButton>
    </form>
  );
}

export default SignInForm;
