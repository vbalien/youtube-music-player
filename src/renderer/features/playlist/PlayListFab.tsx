import React from "react";
import { Fab, makeStyles, Theme, Tooltip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { getVideoInfo, YoutubeVideo } from "../../api/youtubeApi";
import { useDispatch } from "react-redux";
import { getYoutubeViedoInfo } from "../playlist/playlistSlice";

const useStyles = makeStyles((theme: Theme) => ({
  fab: {
    position: "fixed",
    zIndex: theme.zIndex.drawer + 1,
    bottom: 80 + 25,
    right: 25,
  },
}));

export default function PlayListFab(): JSX.Element {
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    dispatch(getYoutubeViedoInfo("XWLPYAX9z1c"));
  };
  return (
    <Tooltip title="유튜브 영상 추가">
      <Fab aria-label="add" className={classes.fab} onClick={handleClick}>
        <AddIcon />
      </Fab>
    </Tooltip>
  );
}
