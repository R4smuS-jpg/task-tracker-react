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

function useHandleChangeField(stateSetter) {
  return useCallback((event) => {
    const { value, id } = event.target;

    stateSetter((currentState) => ({
      ...currentState,
      [id]: value,
    }));
  }, []);
}

function SignInForm() {
  // hooks
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [disabledButtonState, setDisabledButtonState] = useState(true);

  const [formState, setFormState] = useState(INITIAL_FORM_STATE);

  // handlers
  function handleChangeEmail(event) {
    const error = validateEmail(event.target.value);
    setEmailError(error);

    useHandleChangeField(setFormState);
    // changeButtonState;
  }

  function handleChangePassword(event) {
    const error = validatePassword(event.target.value);
    setPasswordError(error);

    useHandleChangeField(setFormState);
    // changeButtonState;
  }

  // other functions
  function handleBlur(event) {
    event.target.value = event.target.value.trim();
  }

  // function changeButtonState() {
  //   for (let i = 0; i < formErrors.length; i++) {
  //     if (formErrors[i].match(/[a-z]/)) {
  //       setDisabledButtonState(true);
  //       return;
  //     }
  //   }

  //   setDisabledButtonState(false);
  // }

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
        <InputField id="email" type="email" placeholder="Email" value={formState.email} onBlur={handleBlur} onChange={handleChangeEmail}>
          Email
        </InputField>
        <P>{emailError}</P>
      </InputFieldWrap>

      <InputFieldWrap>
        <InputField id="password" type="password" placeholder="Password" value={formState.password} onChange={handleChangePassword}>
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
