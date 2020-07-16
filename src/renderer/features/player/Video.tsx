import React, { useRef, useEffect } from "react";
import { makeStyles, Theme, IconButton } from "@material-ui/core";
import { playerHeight } from "./Player";
import { PictureInPictureAlt } from "@material-ui/icons";
import { fetchVideoUrl, setLoaded } from "./playerSlice";
import { useDispatch, useSelector } from "react-redux";
import { YoutubeVideo } from "../../api/youtubeApi";
import { RootState } from "../../app/rootReducer";

interface VideoProps {
  src?: string;
  play: boolean;
  volume: number;
  selectedItem?: YoutubeVideo;
  onChange(play: boolean): void;
}

const useStyles = makeStyles<Theme>(() => ({
  root: {
    position: "fixed",
    backgroundColor: "black",
    left: 0,
    bottom: 0,
    "&:hover": {
      "& $overlay": {
        opacity: 0.8,
      },
      "& $video": {
        maxHeight: 300,
      },
    },
  },
  overlay: {
    position: "absolute",
    zIndex: 1,
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    transition: "opacity .3s",
    opacity: 0.0,
  },
  video: {
    display: "block",
    maxHeight: playerHeight,
    maxWidth: 240,
    transition: "all 1s",
  },
  pip: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
}));

declare global {
  interface Document {
    exitPictureInPicture(): void;
    pictureInPictureElement: HTMLVideoElement;
  }
  interface HTMLVideoElement {
    requestPictureInPicture(): void;
  }
}

export default function Video(props: VideoProps): JSX.Element {
  const classes = useStyles();
  const dispatch = useDispatch();
  const videoEl = useRef<HTMLVideoElement>(null);
  const loaded = useSelector((state: RootState) => state.player.isLoaded);
  const onPIP = (): void => {
    if (videoEl.current !== document.pictureInPictureElement)
      videoEl?.current?.requestPictureInPicture();
    else document.exitPictureInPicture();
  };
  const onLoaded = (): void => {
    dispatch(setLoaded(true));
  };
  useEffect(() => {
    if (props.selectedItem) {
      dispatch(setLoaded(false));
      dispatch(fetchVideoUrl(props.selectedItem.videoId));
    }
  }, [props.selectedItem]);

  useEffect(() => {
    if (props.src && !loaded) videoEl?.current?.load();
  }, [props.src]);

  useEffect(() => {
    if (videoEl?.current) videoEl.current.volume = props.volume;
  }, [props.volume]);

  useEffect(() => {
    if (props.play && loaded) videoEl?.current?.play();
    else videoEl?.current?.pause();
  }, [props.play, loaded]);

  return (
    <div className={classes.root}>
      <div className={classes.overlay}>
        <IconButton onClick={onPIP} className={classes.pip}>
          <PictureInPictureAlt fontSize="large" />
        </IconButton>
      </div>
      <video
        ref={videoEl}
        className={classes.video}
        onLoadedData={onLoaded}
        onPause={(): void => props.onChange(false)}
        onPlay={(): void => props.onChange(true)}
      >
        <source src={props.src} type="video/mp4" />
      </video>
    </div>
  );
}
