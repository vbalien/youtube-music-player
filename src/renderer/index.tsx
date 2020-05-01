import * as ReactDOM from "react-dom";
import React from "react";
import App from "./app/App";
import store from "./app/store";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { Provider as ReduxProvider } from "react-redux";
import { darkTheme } from "./themes";
import "typeface-roboto";

ReactDOM.render(
  <ReduxProvider store={store}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </ReduxProvider>,
  document.getElementById("root")
);
