import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import useAuthUser from "../api/AuthUser";
import signIn from "../api/mutations/signIn";
import { useApolloClient } from "@apollo/client";

import InputField from "./InputField";
import Button from "./Button";

import validateEmail from "../validators/emailValidator.js";
import validatePassword from "../validators/passwordValidator.js";

// styles
const SubmitButton = styled(Button)`
  margin-top: 10px;

  width: 4.5em;
  height: 1.4em;

  color: #484f4f;
  background-color: white;

  font-size: 32px;
`;

const P = styled.p`
  font-size: 1.8em;
  color: #c24641;
`;

const InputFieldWrap = styled.div`
  margin-bottom: 10px;
`;

const INITIAL_FORM_STATE = { email: "", password: "" };

function SignInForm() {
  // hooks
  function useHandleChangeField(stateSetter) {
    return useCallback((event) => {
      const { value, id } = event.target;
      if (id == "email") {
        handleChangeEmail(event.target.value);
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
