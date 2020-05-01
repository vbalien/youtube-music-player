import {
  IconButton,
  List,
  ListItemSecondaryAction,
  ListSubheader,
  Tooltip,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@material-ui/core";
import {
  PlaylistPlay as PlaylistPlayIcon,
  Add as AddIcon,
} from "@material-ui/icons";
import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import SidebarPlayListItemMenu from "./SidebarPlayListItemMenu";
import { useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";
import CreatePlaylistDialog from "./CreatePlaylistDialog";
import { remote } from "electron";

export default function SidebarPlayList(): JSX.Element {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [createPlaylistOpen, setCreatePlaylistOpen] = React.useState(false);
  const playlists = useSelector((state: RootState) => state.playlists);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const openCreatePlaylist = (): void => {
    setCreatePlaylistOpen(true);
    setAnchorEl(null);
  };
  const closeCreatePlaylist = (): void => {
    setCreatePlaylistOpen(false);
    setAnchorEl(null);
  };
  const importFile = async (): Promise<void> => {
    console.log(
      remote.dialog.showOpenDialogSync(remote.getCurrentWindow(), {
        properties: ["openFile"],
        filters: [{ name: "JSON file", extensions: ["json"] }],
      })
    );
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <CreatePlaylistDialog
        open={createPlaylistOpen}
        onClose={closeCreatePlaylist}
      />
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            PlayList
            <ListItemSecondaryAction>
              <Tooltip title="플레이리스트 추가">
                <IconButton
                  onClick={handleClick}
                  edge="end"
                  aria-label="add"
                  size="small"
                >
                  <AddIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                onClose={handleClose}
              >
                <MenuItem onClick={openCreatePlaylist}>새로 만들기</MenuItem>
                <MenuItem onClick={importFile}>가져오기</MenuItem>
              </Menu>
            </ListItemSecondaryAction>
          </ListSubheader>
        }
      >
        {playlists.map(({ name, id }) => (
          <ListItem
            button
            component={RouterLink}
            key={id}
            to={`/playlist/${id}`}
            selected={location.pathname === `/playlist/${id}`}
          >
            <ListItemIcon>
              <PlaylistPlayIcon />
            </ListItemIcon>
            <ListItemText primary={name} />
            <ListItemSecondaryAction>
              <SidebarPlayListItemMenu />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}
