import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getVideoUrl } from "../../api/youtubeApi";
import { AppThunk } from "../../app/store";

interface PlayerState {
  videoUrl?: string;
  isPlaying: boolean;
}

const initialState: PlayerState = {
  videoUrl: undefined,
  isPlaying: false,
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
    // 필요에 따라 reducer 추가
  },
});

export const {
  getVideoUrlSuccess,
  getVideoUrlFailure,
  setPlayState,
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
