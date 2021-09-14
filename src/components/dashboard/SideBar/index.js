import React from "react";

import { SideBarContainer } from "./style";

import List from "../../common/List";
import { listData } from "../../../data";

const SideBar = () => {
  return (
    <SideBarContainer>
      {listData.map((item, index) => (
        <List
          title={item.title}
          Icon={item.Icon}
          nestedList={item.nestedList}
          onClick={item}
          href={item.href}
        />
      ))}
    </SideBarContainer>
  );
};

export default SideBar;
