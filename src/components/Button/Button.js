import React from "react";
import { DefaultButton } from "components/Button/components";

function Button({ form, type, img, onClick, children, className, disabled }) {
  return (
    <DefaultButton className={className} disabled={disabled} form={form} type={type} img={img} onClick={onClick}>
      {children}
    </DefaultButton>
  );
}

export default Button;
