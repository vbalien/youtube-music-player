import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { hot } from "react-hot-loader";
import { Toolbar, AppBar, Typography, Fab } from "@material-ui/core";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import routes from "./routes";

const toolbarHeight = 80;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
  toolBar: {
    minHeight: toolbarHeight,
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
    <Router>
      <div className={classes.root}>
        <Sidebar toolbarHeight={toolbarHeight} />
        <main className={classes.content}>
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} {...route}></Route>
            ))}
          </Switch>
        </main>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Typography variant="h6">현재 재생 곡 표시</Typography>
          </Toolbar>
        </AppBar>
        <Fab aria-label="add" className={classes.fab}>
          <AddIcon />
        </Fab>
      </div>
    </Router>
  );
}

export default hot(module)(App);
