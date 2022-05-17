import React from "react";

import Button from "../../Button";

import { Wrapper, Header, Form, ButtonWrapper, StyledImage } from "./components";
import EditImg from "./images/pen.png";
import RemoveImg from "./images/trash-bin.png";
import InputField from "../../InputField";

export default function EntityCard({ title, name, id, description, onRemoveClick }) {
  return (
    <Wrapper>
      <Header>
        {title}
        <ButtonWrapper>
          <Button>
            <StyledImage src={EditImg} alt="presentation" />
          </Button>
          <Button onClick={() => onRemoveClick(id)}>
            <StyledImage src={RemoveImg} alt="presentation" />
          </Button>
        </ButtonWrapper>
      </Header>
      <Form>
        <InputField label="Name" value={name} disabled />
        <InputField label="Description" value={description} disabled />
      </Form>
    </Wrapper>
  );
}
