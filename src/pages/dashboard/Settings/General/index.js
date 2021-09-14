import React from "react";

import NavBar from "../../../../components/dashboard/NavBar";
import SideBar from "../../../../components/dashboard/SideBar";

import { MainDiv, LeftDiv, RightDiv, ContentDiv, IconContainer } from "./style";
import { ContentTitle } from "../../../../style";
// icons
import KeyboardBackspaceOutlinedIcon from "@material-ui/icons/KeyboardBackspaceOutlined";
import {
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";

import Input from "../../../../components/common/Input";
import Select from "../../../../components/common/Select";

const GeneralSettings = () => {
  const history = useHistory();

  return (
    <MainDiv>
      <NavBar />
      <LeftDiv>
        <SideBar />
      </LeftDiv>
      <RightDiv>
        <ContentDiv>
          <Container style={{ display: "flex", alignItems: "center" }}>
            <IconContainer
              onClick={() => {
                history.goBack();
              }}
            >
              <KeyboardBackspaceOutlinedIcon />
            </IconContainer>
            <ContentTitle>Settings</ContentTitle>
          </Container>
          <Grid container style={{ marginTop: 30 }}>
            <Grid item md={5} xs={12}>
              <Container>
                <Typography style={{ fontWeight: "bold" }}>
                  Store Details
                </Typography>
                <p>
                  Shopify and your customers will use this information to
                  contact you.
                </p>
              </Container>
            </Grid>
            <Grid item md={7} xs={12}>
              <Paper style={{ padding: 12 }}>
                <Container>
                  <Grid container spacing={2}>
                    <Grid item md={12} xs={12}>
                      <Typography>Store name</Typography>
                      <Input defaultValue="Your Store Name" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography>Store contact email</Typography>
                      <Input defaultValue="yourstoreemail@gmail.com" />
                      <p>
                        We'll use this address if we need to contact you about
                        your store.
                      </p>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography>Sender email</Typography>
                      <Input defaultValue="youremail@gmail.com" />
                      <p>
                        Your customers will see this address if you email them.
                      </p>
                    </Grid>
                    <Grid item md={12} xs={12}>
                      <Typography>Store industry</Typography>
                      <Select />
                    </Grid>
                  </Grid>
                </Container>
              </Paper>
            </Grid>
          </Grid>
          <Divider style={{ marginTop: 20 }} />
          {/*  */}
          <Grid container style={{ marginTop: 30 }}>
            <Grid item md={5}>
              <Typography style={{ fontWeight: "bold" }}>
                Store Details
              </Typography>
              <p>
                Shopify and your customers will use this information to contact
                you.
              </p>
            </Grid>
            <Grid item md={7}>
              <Paper style={{ padding: 10 }}>
                <Container>
                  <Grid container spacing={2}>
                    <Grid item md={12} xs={12}>
                      <Typography>Store name</Typography>
                      <Input variant="outlined" size="small" fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography>Store name</Typography>
                      <Input variant="outlined" size="small" fullWidth />
                      <p>
                        We'll use this address if we need to contact you about
                        your store.
                      </p>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography>Store name</Typography>
                      <Input variant="outlined" size="small" fullWidth />
                      <p>
                        Your customers will see this address if you email them.
                      </p>
                    </Grid>
                  </Grid>
                </Container>
              </Paper>
            </Grid>
          </Grid>
          {/*  */}
          <Divider style={{ marginTop: 20 }} />
          <Grid container style={{ marginTop: 30 }}>
            <Grid item md={5}>
              <Typography style={{ fontWeight: "bold" }}>
                Store Details
              </Typography>
              <p>
                Shopify and your customers will use this information to contact
                you.
              </p>
            </Grid>
            <Grid item md={7}>
              <Paper style={{ padding: 10 }}>
                <Container>
                  <Grid container spacing={2}>
                    <Grid item md={12} xs={12}>
                      <Typography>Store name</Typography>
                      <Input variant="outlined" size="small" fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography>Store name</Typography>
                      <Input variant="outlined" size="small" fullWidth />
                      <p>
                        We'll use this address if we need to contact you about
                        your store.
                      </p>
                    </Grid>
                    <Grid item md={6}>
                      <Typography>Store name</Typography>
                      <Input variant="outlined" size="small" fullWidth />
                      <p>
                        Your customers will see this address if you email them.
                      </p>
                    </Grid>
                  </Grid>
                </Container>
              </Paper>
            </Grid>
          </Grid>
          <Divider style={{ marginTop: 20, marginBottom: 20 }} />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button>Save</Button>
          </div>
        </ContentDiv>
      </RightDiv>
    </MainDiv>
  );
};

export default GeneralSettings;
