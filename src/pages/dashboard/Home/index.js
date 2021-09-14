import { Container } from "@material-ui/core";
import React from "react";

// components
import NavBar from "../../../components/dashboard/NavBar";
import SideBar from "../../../components/dashboard/SideBar";

import { MainDiv, LeftDiv, RightDiv } from "./style";

const Home = () => {
  return (
    <MainDiv>
      <NavBar />
      <LeftDiv>
        <SideBar />
      </LeftDiv>
      <RightDiv>
        <h1>Content</h1>
      </RightDiv>
    </MainDiv>
  );
};

export default Home;
