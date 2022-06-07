// import { styled } from '@mui/material/styles';
import styled from "styled-components";

import Button from "@mui/material/Button";
import { DialogTitle } from '@mui/material';

export const StyledButton = styled(Button)`
  && {
    background: none;
    background-color: white;
    cursor: pointer;
    border: 3px solid;
    border-color: #379683;
    border-radius: 6px;
    color: #484f4f;
    font-family: inherit;
    font-size: 0.5em;
  }
`

export const StyledTitle = styled(DialogTitle)`
  && {
    background-color: #379683;
    color: #fffff0;
    height: 0.9em;
    font-family: ZCOOL QingKe HuangYou;
    font-size: 2em;
    padding: 0.5em 0.5em;
    line-height: 1;
    margin-bottom: 0.7em;
  }
`