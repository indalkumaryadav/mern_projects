import React from "react";
import styled from "styled-components";

const SelectField = styled.select`
  width: 100%;
  height: 40px;
  padding: 8px;
  outline: none;
  border-radius: 4px;
  background-color: white;
`;

const SelectInput = () => {
  return (
    <SelectField>
      <option>Indal</option>
      <option>Kumar</option>
      <option>Indal</option>
    </SelectField>
  );
};

export default SelectInput;
