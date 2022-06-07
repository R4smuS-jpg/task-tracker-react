import styled from "styled-components";
import Button from "components/Button/Button"
import InputField from "components/input/InputField/InputField";

export const SubmitButton = styled(Button)`
  margin-top: 20px;

  width: 4.5em;
  height: 1.4em;

  color: #484f4f;
  background-color: white;

  font-size: 32px;
`;

export const P = styled.p`
  font-size: 1.6em;
  color: #f2284e;
`;

export const AddAvatarButton = styled(InputField)`
  font-size: 24px;
  color: #484f4f;

  width: 320px;

  border: 2px solid #379683;
  border-radius: 6px;
`;

export const AddAvatarButtonWrap = styled.div`
  padding-right: 176px;
`;

export const InputFieldWrap = styled.div`
  margin-bottom: 10px;
`;