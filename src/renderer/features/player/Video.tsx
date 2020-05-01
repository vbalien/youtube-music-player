import React, { useRef } from "react";
import { makeStyles, Theme, IconButton } from "@material-ui/core";
import { playerHeight } from "./Player";
import { PictureInPictureAlt } from "@material-ui/icons";

interface VideoProps {
  src: string;
}

const useStyles = makeStyles<Theme>(() => ({
  root: {
    position: "fixed",
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
  const videoEl = useRef<HTMLVideoElement>(null);
  const onPIP = (): void => {
    if (videoEl.current !== document.pictureInPictureElement)
      videoEl?.current?.requestPictureInPicture();
    else document.exitPictureInPicture();
  };
  return (
    <div className={classes.root}>
      <div className={classes.overlay}>
        <IconButton className={classes.pip}>
          <PictureInPictureAlt fontSize="large" onClick={onPIP} />
        </IconButton>
      </div>
      <video ref={videoEl} className={classes.video}>
        <source src={props.src} type="video/mp4" />
      </video>
    </div>
  );
}
