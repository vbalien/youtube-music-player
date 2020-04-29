import * as ReactDOM from "react-dom";
import React from "react";
import App from "./app/App";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { darkTheme } from "./themes";
import "typeface-roboto";

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
