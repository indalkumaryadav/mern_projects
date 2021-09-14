import React from "react";

import { Container, Divider, Grid, Paper, Typography } from "@material-ui/core";
import NavBar from "../../../../components/dashboard/NavBar";
import SideBar from "../../../../components/dashboard/SideBar";
import Card from "../../../../components/common/Card";

import {
  MainDiv,
  LeftDiv,
  RightDiv,
  ContentDiv,
  ContentTitle,
} from "../../../../style";
import { IconContainer } from "./style";

// icons
import KeyboardBackspaceOutlinedIcon from "@material-ui/icons/KeyboardBackspaceOutlined";

const Files = () => {
  return (
    <MainDiv>
      <NavBar />
      <LeftDiv>
        <SideBar />
      </LeftDiv>
      <RightDiv>
        <ContentDiv>
          <Container style={{ display: "flex", alignItems: "center" }}>
            <IconContainer>
              <KeyboardBackspaceOutlinedIcon />
            </IconContainer>
            <ContentTitle>Files</ContentTitle>
          </Container>
          <Grid container style={{ marginTop: 30 }}>
            <Grid item md={5} xs={12}>
              <Container>
                <Typography>Store Details</Typography>
                <p>
                  Shopify and your customers will use this information to
                  contact you.
                </p>
              </Container>
            </Grid>
            <Grid item md={7} xs={12}>
              <Paper style={{ padding: 12 }}>
                <Container>{/* radio button */}</Container>
              </Paper>
            </Grid>
          </Grid>
          <Divider style={{ marginTop: 20 }} />
          {/*  */}
        </ContentDiv>
      </RightDiv>
    </MainDiv>
  );
};

export default Files;
