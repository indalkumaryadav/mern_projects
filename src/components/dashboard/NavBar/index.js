import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import NavDrawer from "../NavDrawer";

import { Search, NavContainer } from "./style";

// icons
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  sectionMobile: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      {click && <NavDrawer handleClick={handleClick} />}
      <AppBar elevation={0} style={{ height: 56 }}>
        <Toolbar
          className={classes.sectionDesktop}
          style={{ justifyContent: "space-between" }}
        >
          <Button>Website-Name</Button>
          <Button>
            <Avatar style={{ width: 30, height: 30, marginRight: 4 }} /> Indal
            Kumar
          </Button>
        </Toolbar>
        <Toolbar className={classes.sectionMobile}>
          <IconButton onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <IconButton>
            <Avatar />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
