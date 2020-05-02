import React from "react";
import { useParams } from "react-router-dom";
import PlayListView from "./PlayListView";
import PlayListFab from "./PlayListFab";
import PageAppBar from "../../components/PageAppBar";
import { PlaylistPlay as PlaylistPlayIcon } from "@material-ui/icons";
import { Toolbar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";

export default function PlaylistPage(): JSX.Element {
  const { idx } = useParams();
  const playlist = useSelector((state: RootState) => state.playlists[idx]);

  const onSearchInputChanged = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    console.log(e.target.value);
  };

  return (
    <div>
      <Toolbar />
      <PageAppBar
        onChange={onSearchInputChanged}
        title={playlist?.name || ""}
        icon={
          <PlaylistPlayIcon
            color="inherit"
            aria-label="menu"
            fontSize="large"
          />
        }
      />
      <PlayListView items={playlist?.items || []} />
      <PlayListFab />
    </div>
  );
}
