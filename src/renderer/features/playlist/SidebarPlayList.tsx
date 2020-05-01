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
import { Link as RouterLink } from "react-router-dom";
import SidebarPlayListItemMenu from "./SidebarPlayListItemMenu";

export default function SidebarPlayList(): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
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
              <MenuItem onClick={handleClose}>새로 만들기</MenuItem>
              <MenuItem onClick={handleClose}>가져오기</MenuItem>
            </Menu>
          </ListItemSecondaryAction>
        </ListSubheader>
      }
    >
      {[
        { name: "재생목록1", id: 0 },
        { name: "재생목록2", id: 1 },
      ].map(({ name, id }) => (
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
  );
}
