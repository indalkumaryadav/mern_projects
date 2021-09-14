import React from "react";
import { IconButton, Button } from "@material-ui/core";

// icons
import CloseIcon from "@material-ui/icons/Close";

import { NavDrawerContainer, LeftDiv, RightDiv } from "./style";

import List from "../../common/List";
import { listData } from "../../../data";

const NavDrawer = ({ handleClick }) => {
  return (
    <NavDrawerContainer>
      <LeftDiv>
        <div style={{ margin: 8 }}>
          <Button fullWidth style={{ backgroundColor: "#f6f6f7", padding: 10 }}>
            Your Website
          </Button>
        </div>
        <div style={{ backgroundColor: "#f6f6f7", flex: 1 }}>
          {listData.map((item, index) => (
            <List
              title={item.title}
              Icon={item.Icon}
              nestedList={item.nestedList}
              onClick={item}
            />
          ))}
        </div>
      </LeftDiv>
      <RightDiv>
        <IconButton onClick={handleClick}>
          <CloseIcon style={{ color: "white", fontSize: 30 }} />
        </IconButton>
      </RightDiv>
    </NavDrawerContainer>
  );
};

export default NavDrawer;
