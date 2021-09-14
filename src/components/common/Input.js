import React from "react";
import { TextField } from "@material-ui/core";
import styled from "styled-components";

const InputField = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  border-radius: 4px;
  border-color: lightgray;
  padding: 8px;
  font-size: 16px;
  &:focus {
    border-color: blue;
  }
`;

const Input = ({ ...props }) => {
  return <InputField {...props} />;
};

export default Input;
