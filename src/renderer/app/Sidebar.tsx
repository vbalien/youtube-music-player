import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  ListSubheader,
  ListItemText,
  Toolbar,
  makeStyles,
  Theme,
} from "@material-ui/core";
import {
  QueueMusic as QueueMusicIcon,
  PlaylistPlay as PlaylistPlayIcon,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles<Theme, SidebarProps>(() => ({
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
    minHeight: (props): number => props.toolbarHeight,
  },
}));

interface SidebarProps {
  toolbarHeight: number;
}

function Sidebar(props: SidebarProps): JSX.Element {
  const classes = useStyles(props);
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
          <ListItem button component={Link} to="/queue">
            <ListItemIcon>
              <QueueMusicIcon />
            </ListItemIcon>
            <ListItemText primary="Queue" />
          </ListItem>
        </List>
        <Divider />
        <List
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              PlayList
            </ListSubheader>
          }
        >
          {[
            { name: "재생목록1", id: 0 },
            { name: "재생목록2", id: 1 },
          ].map(({ name, id }) => (
            <ListItem button component={Link} key={id} to={`/playlist/${id}`}>
              <ListItemIcon>
                <PlaylistPlayIcon />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          ))}
        </List>
      </div>
      <Toolbar className={classes.toolBar} />
    </Drawer>
  );
}

export default Sidebar;
