import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  list: {
    height: 20,
    padding: "1rem",
    marginTop: 6,
  },
  listItemIcon: {
    minWidth: 35,
  },
  listItemText: {
    fontSize: "0.9rem",
    fontWeight: "550",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  nestedList: {
    paddingLeft: theme.spacing(5.5),
    height: 20,
    padding: "1rem",
    marginTop: 6,
  },
  nestedListItemText: {
    fontSize: "0.9rem",
  },
}));

const ListContainer = ({ title, Icon, nestedList, href }) => {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = useState(false);

  const handleState = () => setState(!state);

  return (
    <List disablePadding component="nav" aria-label="main mailbox folders">
      <ListItem
        button
        className={classes.list}
        onClick={() => {
          handleState();
          history.push(href);
        }}
      >
        <ListItemIcon className={classes.listItemIcon}>
          {Icon && <Icon />}
        </ListItemIcon>
        <ListItemText
          primary={title}
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      {nestedList &&
        nestedList.map((item, index) => (
          <Collapse key={index} in={state}>
            <List disablePadding>
              <ListItem button className={classes.nestedList}>
                <ListItemText
                  primary={item.title}
                  classes={{ primary: classes.nestedListItemText }}
                />
              </ListItem>
            </List>
          </Collapse>
        ))}
    </List>
  );
};

export default ListContainer;
