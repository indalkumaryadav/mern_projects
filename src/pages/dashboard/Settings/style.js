import { Paper } from "@material-ui/core";
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

export const ContentDiv = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 80px;
  @media screen and (max-width: 960px) {
    width: 100%;
    margin-top: 0px;
  }
`;

export const SettingsContainer = styled(Paper)`
  padding: 10px;
  @media screen and (max-width: 960px) {
  }
`;