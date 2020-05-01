import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Grid,
  IconButton,
  Slider,
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
  menu: {
    textAlign: "right",
  },
}));

export default function Player(): JSX.Element {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Video src="https://www.w3schools.com/html/mov_bbb.mp4" />
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid container item xs={10} direction="row">
            <Grid container item xs={12} justify="center" alignItems="center">
              <Grid item>
                <IconButton size="small">
                  <Shuffle fontSize="small" />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <SkipPrevious fontSize="small" />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <PlayCircleOutlineRounded fontSize="large" />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <SkipNext fontSize="small" />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <Repeat fontSize="small" />
                </IconButton>
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={1}>
                <Typography align="center">00:00</Typography>
              </Grid>
              <Grid item xs={10}>
                <Slider
                  color="secondary"
                  value={50}
                  aria-labelledby="continuous-slider"
                />
              </Grid>
              <Grid item xs={1}>
                <Typography align="center">00:00</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.menu} item xs={2}>
            <Grid container spacing={2}>
              <Grid item>
                <VolumeDown />
              </Grid>
              <Grid item xs>
                <Slider
                  color="secondary"
                  value={50}
                  aria-labelledby="continuous-slider"
                />
              </Grid>
              <Grid item>
                <VolumeUp />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
