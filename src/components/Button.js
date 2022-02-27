import React from 'react';
import styled from 'styled-components';

const DefaultButton = styled.button`
  cursor: pointer;

  border: 3px solid #379683;
  border-radius: 6px;

  font: inherit;
`

function Button(props) {
  const {form, type, img, onClick, children, className} = props;

  return (
    <DefaultButton className={className} form={form} type={type} img={img} onClick={onClick}>{children}</DefaultButton>
  );
}

export default Button;
