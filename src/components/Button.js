import React from 'react';
import styled from 'styled-components';

const Knopka = styled.button`
  cursor: pointer;

  border: 3px solid #379683;
  border-radius: 6px;

  color: #484f4f;

  font-size: 32px;
  width: 160px;
  height: 42px;

  font-family: 'ZCOOL QingKe HuangYou', cursive;
`

function Button(props) {
  return (
    <Knopka form={props.form} type={props.type} img={props.imgPath}>{props.buttonText}</Knopka>
  );
}

export default Button;