import { combineReducers } from "redux";
import queueReducer from "../features/queue/queueSlice";
import playlistReducer from "../features/playlist/playlistSlice";
import playerReducer from "../features/player/playerSlice";

const rootReducer = combineReducers({
  queue: queueReducer,
  playlists: playlistReducer,
  player: playerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
