import { Typography, IconButton, Slider, Box } from "@material-ui/core";
import React from "react";
import {
  PlayCircleOutlineRounded,
  VolumeDown,
  VolumeUp,
  Shuffle,
  SkipPrevious,
  SkipNext,
  Repeat,
  PauseCircleOutlineRounded,
} from "@material-ui/icons";
import { seconds2Str } from "../../utils/timeUtils";

interface ControllerProps {
  play: boolean;
  cursor: number;
  curTime: number;
  maxTime: number;
  setPlay(val: boolean): void;
  setMusic(cur: number): void;
}

export default function Controller({
  setPlay,
  play,
  setMusic,
  cursor,
  curTime,
  maxTime,
}: ControllerProps): JSX.Element {
  return (
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
            <IconButton size="small" onClick={(): void => setMusic(cursor - 1)}>
              <SkipPrevious fontSize="small" />
            </IconButton>
          </Box>
          <Box px={1}>
            <IconButton size="small" onClick={(): void => setPlay(!play)}>
              {play ? (
                <PauseCircleOutlineRounded fontSize="large" />
              ) : (
                <PlayCircleOutlineRounded fontSize="large" />
              )}
            </IconButton>
          </Box>
          <Box px={1}>
            <IconButton size="small" onClick={(): void => setMusic(cursor + 1)}>
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
            <Typography align="center">{seconds2Str(curTime)}</Typography>
          </Box>
          <Box display="flex" flexGrow={1} alignItems="center">
            <Slider
              color="secondary"
              value={50}
              aria-labelledby="continuous-slider"
            />
          </Box>
          <Box display="flex" maxWidth={70} alignItems="center" px={1}>
            <Typography align="center">{seconds2Str(maxTime)}</Typography>
          </Box>
        </Box>
      </Box>
      <Box display="flex" minWidth={140} textAlign="center">
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
  );
}
