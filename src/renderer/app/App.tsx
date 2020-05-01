import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { hot } from "react-hot-loader";
import { Toolbar } from "@material-ui/core";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../features/sidebar/Sidebar";
import routes from "./routes";
import Player, { playerHeight } from "../features/player/Player";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
  },
  toolBar: {
    minHeight: playerHeight,
  },
}));

function App(): JSX.Element {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <Sidebar />
        <main className={classes.content}>
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} {...route}></Route>
            ))}
          </Switch>
          <Toolbar className={classes.toolBar} />
        </main>
        <Player />
      </div>
    </Router>
  );
}

export default hot(module)(App);
