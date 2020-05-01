import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";

interface CreatePlaylistDialogProps {
  open: boolean;
  onClose(): void;
}

export default function CreatePlaylistDialog({
  open,
  onClose,
}: CreatePlaylistDialogProps): JSX.Element {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
    >
      <DialogTitle id="alert-dialog-title">{"Youtube 동영상 추가"}</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          placeholder="Video URL혹은 VideoID를 입력해주세요."
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          취소
        </Button>
        <Button onClick={onClose} color="primary" autoFocus>
          추가
        </Button>
      </DialogActions>
    </Dialog>
  );
}
