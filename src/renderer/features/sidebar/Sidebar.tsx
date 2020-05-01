import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  ListItemText,
  Toolbar,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { QueueMusic as QueueMusicIcon } from "@material-ui/icons";
import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import SidebarPlayList from "./SidebarPlayList";
import { playerHeight } from "../player/Player";

const drawerWidth = 240;
const useStyles = makeStyles<Theme>(() => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  toolBar: {
    minHeight: playerHeight,
  },
  playlistAddBtn: {},
}));

export default function Sidebar(): JSX.Element {
  const classes = useStyles();
  const location = useLocation();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerContainer}>
        <List>
          <ListItem
            button
            component={RouterLink}
            to="/queue"
            selected={location.pathname === "/queue"}
          >
            <ListItemIcon>
              <QueueMusicIcon />
            </ListItemIcon>
            <ListItemText primary="Queue" />
          </ListItem>
        </List>
        <Divider />
        <SidebarPlayList />
      </div>
      <Toolbar className={classes.toolBar} />
    </Drawer>
  );
}
