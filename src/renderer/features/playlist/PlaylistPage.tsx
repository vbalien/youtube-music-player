import React from "react";
import { useParams } from "react-router-dom";
import PlayListView from "./PlayListView";
import PlayListFab from "./PlayListFab";
import PageAppBar from "../../components/PageAppBar";
import { PlaylistPlay as PlaylistPlayIcon } from "@material-ui/icons";
import { Toolbar } from "@material-ui/core";

export default function PlaylistPage(): JSX.Element {
  const { id } = useParams();

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
        title={`PlaylistId: ${id}`}
        icon={
          <PlaylistPlayIcon
            color="inherit"
            aria-label="menu"
            fontSize="large"
          />
        }
      />
      <PlayListView />
      <PlayListFab />
    </div>
  );
}
