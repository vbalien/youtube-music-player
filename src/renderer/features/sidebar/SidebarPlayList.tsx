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
import React, { useState, useEffect } from "react";
import {
  Link as RouterLink,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import SidebarPlayListItemMenu from "./SidebarPlayListItemMenu";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/rootReducer";
import CreatePlaylistDialog from "./CreatePlaylistDialog";
import { remote } from "electron";
import { createPlaylist as actCreatePlaylist } from "../playlist/playlistSlice";

export default function SidebarPlayList(): JSX.Element {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [createPlaylistOpen, setCreatePlaylistOpen] = React.useState(false);
  const [textVal, setTextVal] = useState<string>("");
  const playlists = useSelector((state: RootState) => state.playlists);
  const dispatch = useDispatch();
  const history = useHistory();
  const routeMatch = useRouteMatch<{ idx: string }>(`/playlist/:idx`);
  useEffect(() => {
    const params = routeMatch?.params;
    const idx: number = params?.idx === undefined ? 0 : +params.idx;
    if (playlists.length === 0) {
      history.replace("/queue");
    } else if (idx >= playlists.length) {
      const nextId = playlists.length - 1;
      history.replace(`/playlist/${nextId}`);
    }
  }, [playlists.length]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const openCreatePlaylist = (): void => {
    setTextVal(""); // 기존에 입력한 내용을 비워준다.
    setCreatePlaylistOpen(true);
    setAnchorEl(null);
  };
  const closeCreatePlaylist = (): void => {
    setCreatePlaylistOpen(false);
    setAnchorEl(null);
  };
  const addPlaylist = (val: string) => (): void => {
    if (val === "") {
      return;
    }
    // 추가된 리스트로 이동하기 위하여 하는 것
    history.push(`/playlist/${playlists.length}`);
    dispatch(
      actCreatePlaylist({
        name: val,
      })
    );
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
        textVal={textVal}
        setTextVal={setTextVal}
        open={createPlaylistOpen}
        onAddAndClose={addPlaylist}
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
        {playlists.map(({ name, id }, idx) => (
          <ListItem
            button
            component={RouterLink}
            key={id}
            to={`/playlist/${idx}`}
            selected={location.pathname === `/playlist/${idx}`}
          >
            <ListItemIcon>
              <PlaylistPlayIcon />
            </ListItemIcon>
            <ListItemText primary={name} />
            <ListItemSecondaryAction>
              <SidebarPlayListItemMenu idx={idx} />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}
