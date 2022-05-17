import styled, { css } from "styled-components";
import Button from "../../Button";

export const Wrapper = styled.div(
  () => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;

    margin-bottom: 1em;
    border: 3px solid #379683;
    border-radius: 6px;

    background-color: white;
  `
);

export const CreateBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.div`
  margin-right: 1em;
  font-size: 20px;
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;

  > :nth-child(n):not(:last-child) {
    margin-right: 0.5em;
  }
`;

export const StyledButton = styled(Button)`
  font-size: 2em;
  color: #484f4f;
  background-color: white;
`;
