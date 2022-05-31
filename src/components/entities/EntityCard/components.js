import Button from "components/Button";
import styled from "styled-components";

const defaultBorderRadius = "8px";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid #379683;
  border-radius: 10px;
  margin-top: 1em;
`;

export const TasksButton = styled(Button)`
  width: 4em;
  margin-top: 0.5em;
  color: #484f4f;
  background-color: white;
  font-size: 0.9em;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #5fb384;
  padding: 0.5rem 0.5em;
  border-top-left-radius: ${defaultBorderRadius};
  border-top-right-radius: ${defaultBorderRadius};
  border-bottom: 3px solid #379683;
`;

export const Title = styled.div`
  font-size: 2em;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  > :nth-child(n):not(:last-child) {
    margin-right: 0.5em;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #f2dccc;
  border-bottom-left-radius: ${defaultBorderRadius};
  border-bottom-right-radius: ${defaultBorderRadius};
  > * {
    margin-bottom: 0.5rem;
  }
`;

export const StyledImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
`;
