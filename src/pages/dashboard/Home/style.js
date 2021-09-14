import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
export const LeftDiv = styled.div`
  width: 250px;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  margin-top: 56px;
  background-color: #f6f6f7;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
export const RightDiv = styled.div`
  flex: 1;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  margin-top: 56px;
  background-color: #f6f6f7;
`;
