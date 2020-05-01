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

interface Column {
  id: "title" | "author" | "lengthSeconds";
  label: string;
  width?: number;
  align?: "right";
}

const columns: Column[] = [
  { id: "title", label: "제목" },
  { id: "author", label: "게시자", width: 200 },
  { id: "lengthSeconds", label: "시간", width: 100 },
];

interface Data {
  id: number;
  title: string;
  author: string;
  lengthSeconds: string;
}

const rows: Data[] = [
  {
    id: 0,
    title: "Tobu - Roots [NCS Release]",
    author: "NoCopyrightSounds",
    lengthSeconds: "190",
  },
  {
    id: 1,
    title: "Tobu - Roots [NCS Release]",
    author: "NoCopyrightSounds",
    lengthSeconds: "190",
  },
  {
    id: 2,
    title: "Tobu - Roots [NCS Release]",
    author: "NoCopyrightSounds",
    lengthSeconds: "190",
  },
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
  const selectedItem = 1;
  const classes = useStyles();

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
                selected={row.id === selectedItem}
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
                  <Tooltip title="삭제">
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
