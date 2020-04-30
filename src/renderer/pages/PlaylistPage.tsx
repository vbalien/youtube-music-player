import React from "react";
import { useParams } from "react-router-dom";
import PlayListView from "../features/playlist/PlayListView";
import PlayListAppBar from "../features/playlist/PlayListAppBar";
import PlayListFab from "../features/playlist/PlayListFab";

function PlaylistPage(): JSX.Element {
  const { id } = useParams();
  return (
    <div>
      <PlayListAppBar title={`PlaylistId: ${id}`} />
      <PlayListView />
      <PlayListFab />
    </div>
  );
}

export default PlaylistPage;
