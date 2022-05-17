import React, { useState } from "react";

import useHandleChangeField from "../../utils/useHandleChangeField";
import FormError from "../../utils/FormError";

import { Wrapper, CreateBlock, Title, Form, StyledButton } from "./components";
import InputField from "../../InputField";

const INITIAL_FORM_STATE = { name: "", description: "" };

export default function CreateEntityBlock({ entity, handleLogoutClick, createRequest, isLoading, error }) {
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);
  const handleEvents = useHandleChangeField(setFormState);

  const handleCreateClick = async (event) => {
    event.preventDefault();

    await createRequest(formState.name, formState.description);
    setFormState(INITIAL_FORM_STATE);
  };

  return (
    <Wrapper>
      <CreateBlock>
        {error && <FormError>{error.message}</FormError>}
        <Title>{`Create ${entity} form:`}</Title>
        <Form>
          <InputField id="name" label="Name*" value={formState.name} onChange={handleEvents} onBlur={handleEvents} required />
          <InputField id="description" label="Description" value={formState.description} onChange={handleEvents} onBlur={handleEvents} />
          <StyledButton type="submit" onClick={(event) => handleCreateClick(event)} disabled={formState.name.trim() === ""}>
            Create
          </StyledButton>
        </Form>
      </CreateBlock>
      <StyledButton disabled={isLoading} onClick={handleLogoutClick}>
        Logout
      </StyledButton>
    </Wrapper>
  );
}
