import React from "react";
import { Grid } from "@material-ui/core";

import NavBar from "../../../components/dashboard/NavBar";
import SideBar from "../../../components/dashboard/SideBar";
import Card from "../../../components/common/Card";

import {
  MainDiv,
  LeftDiv,
  RightDiv,
  ContentDiv,
  SettingsContainer,
} from "./style";
import { ContentTitle } from "../../../style";
import { settingsData } from "../../../data";

const Settings = () => {
  return (
    <MainDiv>
      <NavBar />
      <LeftDiv>
        <SideBar />
      </LeftDiv>
      <RightDiv>
        <ContentDiv>
          <ContentTitle>Settings</ContentTitle>
          <SettingsContainer>
            <Grid container spacing={2}>
              {settingsData.map((item, index) => (
                <Grid item md={4}>
                  <Card
                    href={item.href}
                    title={item.title}
                    description={item.description}
                  />
                </Grid>
              ))}
            </Grid>
          </SettingsContainer>
        </ContentDiv>
        {/* <div style={{ height: 150 }}></div> */}
      </RightDiv>
    </MainDiv>
  );
};

export default Settings;
