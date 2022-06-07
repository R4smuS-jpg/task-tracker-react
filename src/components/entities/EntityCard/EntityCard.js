import React, { useState } from "react";

import { Wrapper, Header, Form, ButtonWrapper, InputWrapper, InputTitle } from "components/entities/EntityCard/components";
import { ButtonInEditMode, ButtonInShowMode } from "components/entities/EntityCard/buttons";
import InputField from "components/input/InputField/InputField";

import TasksDialog from "components/tasks/TasksDialog";

export default function EntityCard({ title, name, id, description, onRemoveClick, onUpdateClick }) {
  const INITIAL_FORM_STATE = { name, description };

  const [isEditMode, setIsEditMode] = useState(false);
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);

  const handleEvent = (event, formFieldName) => {
    const { value } = event.target;
    const { type } = event;

    setFormState((currentState) => ({
      ...currentState,
      [formFieldName]: type === "blur" ? value.trim() : value,
    }));
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    await onUpdateClick(id, formState.name, formState.description);
  };

  const acceptClick = (event) => {
    setIsEditMode(false);
    handleUpdate(event);
  };

  const discardClick = () => {
    setIsEditMode(false);
    setFormState(INITIAL_FORM_STATE);
  };

  const editClick = () => {
    setIsEditMode(true);
  };

  const removeClick = () => {
    onRemoveClick(id);
  };

  return (
    <Wrapper>
      <Header>
        {title}
        <ButtonWrapper>
          {isEditMode ? (
            <ButtonInEditMode onAcceptClick={acceptClick} onDiscardClick={discardClick} isDisableAccept={formState.name.trim() === ""} />
          ) : (
            <ButtonInShowMode editClick={editClick} removeClick={removeClick} />
          )}
        </ButtonWrapper>
      </Header>
      <Form>
        <InputWrapper>
          <InputTitle>Name</InputTitle>
          <InputField
            id={`name-for-${id}-${title.toLowerCase()}`}
            value={formState.name}
            disabled={!isEditMode}
            onChange={(event) => handleEvent(event, "name")}
            onBlur={(event) => handleEvent(event, "name")}
            required
          ></InputField>
        </InputWrapper>
        <InputWrapper>
          <InputTitle>Description</InputTitle>
          <InputField
            id={`description-for-${id}-${title.toLowerCase()}`}
            value={formState.description}
            disabled={!isEditMode}
            onChange={(event) => handleEvent(event, "description")}
            onBlur={(event) => handleEvent(event, "description")}
          ></InputField>
        </InputWrapper>
        <TasksDialog></TasksDialog>
      </Form>
    </Wrapper>
  );
}
