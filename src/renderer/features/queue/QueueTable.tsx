import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { IconButton, Tooltip } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";
import { seconds2Str } from "../../utils/timeUtils";

interface Column {
  id: "title" | "author" | "time";
  label: string;
  width?: number;
  align?: "right";
}

const columns: Column[] = [
  { id: "title", label: "제목" },
  { id: "author", label: "게시자", width: 200 },
  { id: "time", label: "시간", width: 100 },
];

const useStyles = makeStyles({
  container: {
    position: "absolute",
    top: 64,
    bottom: 80,
    paddingLeft: 240,
    right: 0,
  },
});

export default function QueueTable(): JSX.Element {
  const classes = useStyles();
  const { rows, cursor } = useSelector((state: RootState) => ({
    cursor: state.queue.cursor,
    rows: state.queue.items.map((val, idx) => ({
      ...val,
      id: idx,
      time: seconds2Str(Number(val.lengthSeconds)),
    })),
  }));

  return (
    <TableContainer className={classes.container}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ width: column.width }}
              >
                {column.label}
              </TableCell>
            ))}
            <TableCell align="left" style={{ width: 100 }}>
              메뉴
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={row.id}
                selected={row.id === cursor}
              >
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {value}
                    </TableCell>
                  );
                })}
                <TableCell align="left">
                  <Tooltip title="큐에서 제거">
                    <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
