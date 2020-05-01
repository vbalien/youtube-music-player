import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { YoutubeVideo } from "../../api/youtubeApi";

interface QueueState {
  cursor: number;
  items: YoutubeVideo[];
}

const initialState: QueueState = {
  cursor: -1,
  items: [
    {
      videoId: "7wNb0pHyGuI",
      title: "Tobu - Roots [NCS Release]",
      author: "NoCopyrightSounds",
      lengthSeconds: "190",
      thumbnail:
        "https://i.ytimg.com/vi/7wNb0pHyGuI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD9LNVf9c0RFc9fb0hhbiZ1y3zgFg",
    },
    {
      videoId: "CEPDbhlVcFg",
      title:
        "🎬【Lyrics AMV】 귀멸의 칼날 ED Full (EP19) - 카마도 탄지로의 노래 / 시이나 고(Feat. 나카가와 나미) ᴴᴰ",
      author: "화복화 [BokHwa/花復花]",
      lengthSeconds: "446",
      thumbnail: "https://i.ytimg.com/vi/CEPDbhlVcFg/maxresdefault.jpg",
    },
    {
      videoId: "TBP9Nqs1n_g",
      title:
        "Stock & Modded Anne Pro 2 Typing Sounds Comparison (Gateron Blues & Halo Clears)",
      author: ":3ildcat",
      lengthSeconds: "226",
      thumbnail: "https://i.ytimg.com/vi/TBP9Nqs1n_g/maxresdefault.jpg",
    },
  ],
};

const queueSlice = createSlice({
  name: "queue",
  initialState,
  reducers: {
    clearQueue(state, action): void {
      // TODO
    },
    addQueue(state, action): void {
      // TODO
    },
    removeQueue(state, action): void {
      // TODO
    },
    setCursor(state, action: PayloadAction<number>): void {
      if (action.payload >= 0 && action.payload < state.items.length)
        state.cursor = action.payload;
    },
    // 필요에 따라 reducer 추가
  },
});

export const {
  clearQueue,
  addQueue,
  removeQueue,
  setCursor,
} = queueSlice.actions;

export default queueSlice.reducer;
