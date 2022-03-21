import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  background-color: white;
  border: 3px solid #379683;
  border-radius: 6px;

  font-size: 32px;
`

const Label = styled.label`
  font-size: 36px;
`

function InputField({className, type, id, placeholder, onChange, onBlur, children}) {
  return (
    <Label hmtlFor={id}>{children}
      <Input className={className} type={type} id={id} placeholder={placeholder} onChange={onChange} onBlur={onBlur}/>
    </Label>
  );
}

export default InputField;
