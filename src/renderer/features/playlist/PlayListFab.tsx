import React from "react";
import { Fab, makeStyles, Theme, Tooltip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme: Theme) => ({
  fab: {
    position: "fixed",
    zIndex: theme.zIndex.drawer + 1,
    bottom: 80 + 25,
    right: 25,
  },
}));

export default function PlayListFab(): JSX.Element {
  const classes = useStyles();
  return (
    <Tooltip title="유튜브 영상 추가">
      <Fab aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
    </Tooltip>
  );
}
