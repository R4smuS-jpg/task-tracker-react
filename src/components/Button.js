import React from 'react';
import styled from 'styled-components';

const Knopka = styled.button`
  cursor: pointer;

  width: 160px;
  height: 48px;

  border: 3px solid #379683;
  border-radius: 6px;

  color: #484f4f;
  background-color: white;

  font: inherit;
  font-size: 32px;

  margin-top: 20px;
`

function Button(props) {
  return (
    <Knopka form={props.form} type={props.type} img={props.imgPath} alt={props.alt}>{props.buttonText}</Knopka>
  );
}

export default Button;