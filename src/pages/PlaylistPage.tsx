import React from "react";
import { useParams } from "react-router-dom";

function PlaylistPage(): JSX.Element {
  const { id } = useParams();
  return <div>Playlist ID: {id}</div>;
}

export default PlaylistPage;
