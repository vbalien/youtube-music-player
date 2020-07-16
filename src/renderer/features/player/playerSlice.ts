import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getVideoUrl } from "../../api/youtubeApi";
import { AppThunk } from "../../app/store";

interface PlayerState {
  videoUrl?: string;
  isPlaying: boolean;
  isLoaded: boolean;
  volume: number;
  position: number;
}

const initialState: PlayerState = {
  videoUrl: undefined,
  isPlaying: false,
  isLoaded: false,
  volume: 0.5,
  position: 0,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayState(state, action: PayloadAction<boolean>): void {
      state.isPlaying = action.payload;
    },
    getVideoUrlSuccess(state, action: PayloadAction<string>): void {
      state.videoUrl = action.payload;
    },
    getVideoUrlFailure(_, action: PayloadAction<string>): void {
      console.log(action.payload);
    },
    setLoaded(state, action: PayloadAction<boolean>): void {
      state.isLoaded = action.payload;
      state.position = 0;
    },
    setVolume(state, action: PayloadAction<number>): void {
      state.volume = action.payload;
    },
    setPosition(state, action: PayloadAction<number>): void {
      state.position = action.payload;
    },
  },
});

export const {
  getVideoUrlSuccess,
  getVideoUrlFailure,
  setPlayState,
  setLoaded,
  setVolume,
  setPosition,
} = playerSlice.actions;

export default playerSlice.reducer;

export const fetchVideoUrl = (videoId: string): AppThunk => async (
  dispatch
): Promise<void> => {
  try {
    const url = await getVideoUrl(videoId);
    dispatch(getVideoUrlSuccess(url));
  } catch (err) {
    dispatch(getVideoUrlFailure(err.toString()));
  }
};
