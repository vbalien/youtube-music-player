import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { YoutubeVideo } from "../../api/youtubeApi";

interface QueueState {
  cursor: number;
  items: YoutubeVideo[];
}

const initialState: QueueState = {
  cursor: -1,
  items: [],
};

const queueSlice = createSlice({
  name: "queue",
  initialState,
  reducers: {
    clearQueue(state): void {
      state.items = [];
    },
    addQueue(state, action: PayloadAction<YoutubeVideo>): void {
      state.items.push(action.payload);
    },
    removeQueue(state, action: PayloadAction<YoutubeVideo>): void {
      const idx = state.items.indexOf(action.payload);
      if (idx !== -1) state.items.splice(idx, 1);
    },
    setCursor(state, action: PayloadAction<number>): void {
      if (action.payload >= 0 && action.payload < state.items.length)
        state.cursor = action.payload;
    },
  },
});

export const {
  clearQueue,
  addQueue,
  removeQueue,
  setCursor,
} = queueSlice.actions;

export default queueSlice.reducer;
