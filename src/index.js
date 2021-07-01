import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import GloblStyles from "./app/style/GlobalStyles";
import App from "./app/App";

const theme = {
  colors: {
    gray: "#a2a2a2",
    light: "#e9e9e9",
    white: "#ffffff",
    primary: "#adbb0c",
    secondary: "#ff801a",
    textLight: "#828282",
    textLighter: "#c2c2c2",
    textDark: "#000000",
  },
};
ReactDOM.render(
  <React.StrictMode>
    <GloblStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
