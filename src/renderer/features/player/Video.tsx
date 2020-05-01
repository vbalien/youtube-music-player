import React, { useRef, useEffect, useState } from "react";
import { makeStyles, Theme, IconButton } from "@material-ui/core";
import { playerHeight } from "./Player";
import { PictureInPictureAlt } from "@material-ui/icons";
import { fetchVideoUrl } from "./playerSlice";
import { useDispatch } from "react-redux";
import { YoutubeVideo } from "../../api/youtubeApi";

interface VideoProps {
  src?: string;
  play: boolean;
  selectedItem?: YoutubeVideo;
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
  const [loaded, setLoaded] = useState(false);
  const onPIP = (): void => {
    if (videoEl.current !== document.pictureInPictureElement)
      videoEl?.current?.requestPictureInPicture();
    else document.exitPictureInPicture();
  };
  const onLoaded = (): void => {
    setLoaded(true);
  };
  useEffect(() => {
    if (props.selectedItem) {
      setLoaded(false);
      dispatch(fetchVideoUrl(props.selectedItem.videoId));
    }
  }, [props.selectedItem]);

  useEffect(() => {
    if (props.src && !loaded) videoEl?.current?.load();
  }, [props.src]);

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
      <video ref={videoEl} className={classes.video} onLoadedData={onLoaded}>
        <source src={props.src} type="video/mp4" />
      </video>
    </div>
  );
}
