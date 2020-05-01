import React from "react";
import { Tooltip, IconButton, Menu, MenuItem } from "@material-ui/core";
import { MoreHoriz as MoreIcon } from "@material-ui/icons";

export default function SidebarPlayListItemMenu(): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Tooltip title="메뉴">
        <IconButton
          onClick={handleClick}
          edge="end"
          aria-label="add"
          size="small"
        >
          <MoreIcon fontSize="small" />
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
        <MenuItem onClick={handleClose}>목록을 큐에 추가</MenuItem>
        <MenuItem onClick={handleClose}>내보내기</MenuItem>
        <MenuItem onClick={handleClose}>삭제</MenuItem>
      </Menu>
    </React.Fragment>
  );
}
