import { AppBar, Toolbar, makeStyles, Box } from "@material-ui/core";
import React, { useRef } from "react";
import Video, { VideoRef } from "./Video";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/rootReducer";
import { setPlayState, setVolume, setPosition } from "./playerSlice";
import Controller from "./Controller";
import { setCursor } from "../queue/queueSlice";

export const playerHeight = 80;
const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    bottom: 0,
    top: "auto",
  },
  toolBar: {
    minHeight: playerHeight,
    marginLeft: 240,
  },
  title: {
    position: "absolute",
    top: 15,
    left: 5,
  },
}));

export default function Player(): JSX.Element {
  const dispatch = useDispatch();
  const classes = useStyles();
  const videoEl = useRef<VideoRef>();
  const {
    current,
    videoUrl,
    isPlaying,
    cursor,
    isLoaded,
    volume,
    position,
  } = useSelector((state: RootState) => ({
    current: state.queue.items[state.queue.cursor],
    videoUrl: state.player.videoUrl,
    isPlaying: state.player.isPlaying,
    cursor: state.queue.cursor,
    isLoaded: state.player.isLoaded,
    volume: state.player.volume,
    position: state.player.position,
  }));
  const setPlay = (val: boolean): void => {
    if (!current) {
      dispatch(setCursor(0));
    }
    dispatch(setPlayState(val));
  };
  const setMusic = (cur: number): void => {
    if (isLoaded) dispatch(setCursor(cur));
  };
  const onChange = (play: boolean): void => {
    if (isLoaded) setPlay(play);
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Video
          ref={videoEl}
          src={videoUrl}
          play={isPlaying}
          selectedItem={current}
          onChange={onChange}
          volume={volume}
          position={position}
          onPositionChange={(pos) => dispatch(setPosition(pos))}
        />
        <Box
          className={classes.title}
          maxWidth={200}
          textOverflow="ellipsis"
          fontSize="subtitle1.fontSize"
          overflow="hidden"
          whiteSpace="nowrap"
        >
          {current?.title || ""}
        </Box>
        <Controller
          play={isPlaying}
          setPlay={setPlay}
          setMusic={setMusic}
          onVolumeChange={(val) => dispatch(setVolume(val))}
          onPositionChange={(val) => {
            videoEl.current?.setPos(val);
            dispatch(setPosition(val));
          }}
          volume={volume}
          curTime={position}
          maxTime={Number(current?.lengthSeconds || 0)}
          cursor={cursor}
        />
      </Toolbar>
    </AppBar>
  );
}
