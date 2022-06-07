import React from "react";
import { Label, Input } from "components/input/InputField/components";

function InputField({ className, type, id, placeholder, onChange, onBlur, children, value }) {
  return (
    <Label hmtlFor={id}>
      {children}
      <Input className={className} type={type} id={id} placeholder={placeholder} onChange={onChange} onBlur={onBlur} value={value} />
    </Label>
  );
}

export default InputField;
