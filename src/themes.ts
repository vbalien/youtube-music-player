import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const basePalette = {
  primary: {
    main: "#556cd6",
  },
  secondary: {
    main: "#19857b",
  },
  error: {
    main: red.A400,
  },
  background: {
    default: "#fff",
  },
};

export const normalTheme = createMuiTheme({
  palette: {
    ...basePalette,
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    ...basePalette,
    type: "dark",
    background: {
      default: "#222",
    },
  },
});
