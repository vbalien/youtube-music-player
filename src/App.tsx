import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import AddIcon from "@material-ui/icons/Add";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { hot } from "react-hot-loader";
import { Toolbar, AppBar, Typography, Fab } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
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
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    bottom: 0,
    top: "auto",
  },
  fab: {
    position: "fixed",
    zIndex: theme.zIndex.drawer + 1,
    bottom: 35,
    right: 25,
  },
}));

function App(): JSX.Element {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6">현재 재생 곡 표시</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <PlaylistPlayIcon></PlaylistPlayIcon>
              </ListItemIcon>
              <ListItemText primary="Playlist" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <QueueMusicIcon></QueueMusicIcon>
              </ListItemIcon>
              <ListItemText primary="Queue" />
            </ListItem>
          </List>
        </div>
        <Toolbar />
      </Drawer>
      <Fab aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
    </div>
  );
}

export default hot(module)(App);
