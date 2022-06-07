import React, { useState } from "react";

// import { Wrapper, Header, Form, ButtonWrapper, TasksButton, InputWrapper, InputTitle } from "./components";
// import { ButtonInEditMode, ButtonInShowMode } from "./buttons";

export default function Task({ name, id, description, onRemoveClick, onUpdateClick }) {
  // const [isEditMode, setIsEditMode] = useState(false);

  // const handleUpdate = async (event) => {
  //   event.preventDefault();

  //   await onUpdateClick(id, formState.name, formState.description);
  // };

  // const acceptClick = (event) => {
  //   setIsEditMode(false);
  //   handleUpdate(event);
  // };

  // const discardClick = () => {
  //   setIsEditMode(false);
  //   setFormState(INITIAL_FORM_STATE);
  // };

  // const editClick = () => {
  //   setIsEditMode(true);
  // };

  // const removeClick = () => {
  //   onRemoveClick(id);
  // };

  return (
    // <Wrapper>
    //   <Form>
    //     <InputWrapper>
    //       <InputTitle>Name</InputTitle>
    //       <InputField
    //         id={`name-for-${id}-${title.toLowerCase()}`}
    //         value={formState.name}
    //         disabled={!isEditMode}
    //         onChange={(event) => handleEvent(event, "name")}
    //         onBlur={(event) => handleEvent(event, "name")}
    //         required
    //       ></InputField>
    //     </InputWrapper>
    //     <InputWrapper>
    //       <InputTitle>Description</InputTitle>
    //       <InputField
    //         id={`description-for-${id}-${title.toLowerCase()}`}
    //         value={formState.description}
    //         disabled={!isEditMode}
    //         onChange={(event) => handleEvent(event, "description")}
    //         onBlur={(event) => handleEvent(event, "description")}
    //       ></InputField>
    //     </InputWrapper>
    //     <TasksDialog></TasksDialog>
    //   </Form>
    // </Wrapper>
      <div>
        <p>{name}</p>
        <p>{description}</p>
      </div>
  );
}
