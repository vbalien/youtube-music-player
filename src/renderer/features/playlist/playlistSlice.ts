import { createSlice } from "@reduxjs/toolkit";
import { YoutubeVideo } from "../../api/youtubeApi";

interface Playlist {
  id: number;
  name: string;
  items: YoutubeVideo[];
}

const initialState: Playlist[] = [
  {
    id: 0,
    name: "음악/노래",
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
    ],
  },
  {
    id: 1,
    name: "키보드 ASMR",
    items: [
      {
        videoId: "TBP9Nqs1n_g",
        title:
          "Stock & Modded Anne Pro 2 Typing Sounds Comparison (Gateron Blues & Halo Clears)",
        author: ":3ildcat",
        lengthSeconds: "226",
        thumbnail: "https://i.ytimg.com/vi/TBP9Nqs1n_g/maxresdefault.jpg",
      },
    ],
  },
];

const playlistSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    createPlaylist(state, action): void {
      const { name } = action.payload;
      state.push({
        id: state.length > 0 ? state[state.length - 1].id + 1 : 0,
        name: name,
        items: [],
      });
    },
    distroyPlaylist(state, action): void {
      const { idx } = action.payload;
      state.splice(idx, 1);
    },
    addPlaylist(state, action): void {
      // TODO
    },
  },
});

export const {
  createPlaylist,
  distroyPlaylist,
  addPlaylist,
} = playlistSlice.actions;

export default playlistSlice.reducer;
