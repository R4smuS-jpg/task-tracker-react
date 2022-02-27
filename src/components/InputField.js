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
  const {type, id, placeholder, onChange, onBlur, children} = props;

  return (
    <Label hmtlFor={id}>{children}
      <Input type={type} id={id} placeholder={placeholder} onChange={onChange} onBlur={onBlur}/>
    </Label>
  );
}

export default InputField;
