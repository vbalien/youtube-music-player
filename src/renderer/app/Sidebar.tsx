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
  ListItemSecondaryAction,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import {
  QueueMusic as QueueMusicIcon,
  PlaylistPlay as PlaylistPlayIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";
import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

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
  playlistAddBtn: {},
}));

interface SidebarProps {
  toolbarHeight: number;
}

export default function Sidebar(props: SidebarProps): JSX.Element {
  const classes = useStyles(props);
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
        <List
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              PlayList
              <ListItemSecondaryAction>
                <Tooltip title="플레이리스트 추가">
                  <IconButton edge="end" aria-label="add" size="small">
                    <AddIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </ListItemSecondaryAction>
            </ListSubheader>
          }
        >
          {[
            { name: "재생목록1", id: 0 },
            { name: "재생목록2", id: 1 },
          ].map(({ name, id }) => (
            <ListItem
              button
              component={RouterLink}
              key={id}
              to={`/playlist/${id}`}
              selected={location.pathname === `/playlist/${id}`}
            >
              <ListItemIcon>
                <PlaylistPlayIcon />
              </ListItemIcon>
              <ListItemText primary={name} />
              <ListItemSecondaryAction>
                <Tooltip title="삭제">
                  <IconButton edge="end" aria-label="add" size="small">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
      <Toolbar className={classes.toolBar} />
    </Drawer>
  );
}
