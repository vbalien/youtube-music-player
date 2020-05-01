import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Slider,
  Box,
} from "@material-ui/core";
import React from "react";
import Video from "./Video";
import {
  PlayCircleOutlineRounded,
  VolumeDown,
  VolumeUp,
  Shuffle,
  SkipPrevious,
  SkipNext,
  Repeat,
} from "@material-ui/icons";
import { seconds2Str } from "../../utils/timeUtils";

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
}));

export default function Player(): JSX.Element {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Video src="https://www.w3schools.com/html/mov_bbb.mp4" />
        <Box
          display="flex"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="flex" flexDirection="column" flexGrow={1}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box px={1}>
                <IconButton size="small">
                  <Shuffle fontSize="small" />
                </IconButton>
              </Box>
              <Box px={1}>
                <IconButton size="small">
                  <SkipPrevious fontSize="small" />
                </IconButton>
              </Box>
              <Box px={1}>
                <IconButton size="small">
                  <PlayCircleOutlineRounded fontSize="large" />
                </IconButton>
              </Box>
              <Box px={1}>
                <IconButton size="small">
                  <SkipNext fontSize="small" />
                </IconButton>
              </Box>
              <Box px={1}>
                <IconButton size="small">
                  <Repeat fontSize="small" />
                </IconButton>
              </Box>
            </Box>
            <Box display="flex">
              <Box display="flex" maxWidth={70} alignItems="center" px={1}>
                <Typography align="center">{seconds2Str(0)}</Typography>
              </Box>
              <Box display="flex" flexGrow={1} alignItems="center">
                <Slider
                  color="secondary"
                  value={50}
                  aria-labelledby="continuous-slider"
                />
              </Box>
              <Box display="flex" maxWidth={70} alignItems="center" px={1}>
                <Typography align="center">{seconds2Str(170)}</Typography>
              </Box>
            </Box>
          </Box>
          <Box display="flex" width={140} textAlign="center">
            <Box width={40}>
              <VolumeDown />
            </Box>
            <Box flexGrow={1}>
              <Slider
                color="secondary"
                value={50}
                aria-labelledby="continuous-slider"
              />
            </Box>
            <Box width={40}>
              <VolumeUp />
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
