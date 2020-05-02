import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";

interface CreatePlaylistDialogProps {
  open: boolean;
  textVal: string;
  setTextVal: React.Dispatch<React.SetStateAction<string>>;
  onAddAndClose(value: string): ((event: object) => void) | undefined;
  onClose(): void;
}

export default function CreatePlaylistDialog({
  open,
  textVal,
  setTextVal,
  onAddAndClose,
  onClose,
}: CreatePlaylistDialogProps): JSX.Element {
  const [value, setValue] = [textVal, setTextVal];
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };
  const onKeyTest = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    // 엔터키 후킹용
    if (e.key === "Enter") {
      const test = onAddAndClose(value.trim());
      test && test({});
    }
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
    >
      <DialogTitle id="alert-dialog-title">{"플레이리스트 생성"}</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          onKeyPress={onKeyTest}
          placeholder="플레이리스트 이름을 입력해주세요."
          onChange={onChange}
          value={value}
          autoFocus
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          취소
        </Button>
        <Button onClick={onAddAndClose(value.trim())} color="primary">
          추가
        </Button>
      </DialogActions>
    </Dialog>
  );
}
