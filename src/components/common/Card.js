import React from "react";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Avatar,
  IconButton,
  CardHeader,
} from "@material-ui/core";
import styled from "styled-components";

import SettingsIcon from "@material-ui/icons/Settings";
import { useHistory } from "react-router";

const MyCard = styled(Card)`
  cursor: pointer;
  &:hover {
    background-color: #f6f6f8;
  }
`;
const IconContainer = styled(IconButton)`
  background-color: lightgray;
  border-radius: 5px;
  width: 44px;
  height: 44px;
`;
const CardTitle = styled(Typography)`
  font-weight: 600;
`;
const CardContainer = ({ Icon, href, title, description }) => {
  const history = useHistory();
  return (
    <MyCard
      elevation={0}
      onClick={() => {
        history.push(href);
      }}
    >
      <CardHeader
        avatar={
          <IconContainer>
            <SettingsIcon />
          </IconContainer>
        }
        title={<CardTitle>{title}</CardTitle>}
        subheader={description}
      />
      <CardContent style={{ padding: 6 }}></CardContent>
    </MyCard>
  );
};

export default CardContainer;
