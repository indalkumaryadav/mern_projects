import styled from "styled-components";

export const NavDrawerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 9999;
  display: flex;
  background-color: white;
`;
export const LeftDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
export const RightDiv = styled.div`
  background-color: black;
  opacity: 0.4;
  min-width: 60px;
`;
