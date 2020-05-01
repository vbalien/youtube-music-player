import React from "react";
import PageAppBar from "../../components/PageAppBar";
import { QueueMusic as QueueMusicIcon } from "@material-ui/icons";
import QueueTable from "./QueueTable";

export default function QueuePage(): JSX.Element {
  const onSearchInputChanged = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    console.log(e.target.value);
  };

  return (
    <React.Fragment>
      <PageAppBar
        onChange={onSearchInputChanged}
        title="Queue"
        icon={
          <QueueMusicIcon color="inherit" aria-label="menu" fontSize="large" />
        }
      />
      <QueueTable />
    </React.Fragment>
  );
}
