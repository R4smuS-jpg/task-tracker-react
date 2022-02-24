import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  background-color: white;
  border: 3px solid #379683;
  border-radius: 6px;

  font-size: 32px;

  display: block;
`

const Label = styled.label`
  font-size: 36px;

`

function InputField(props) {
  return (
    <Label for={props.id}>{props.fieldName}
      <Input type={props.type} id={props.id} placeholder={props.placeholder}></Input>
    </Label>
  );
}

export default InputField;
