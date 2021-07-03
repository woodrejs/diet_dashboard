import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import GloblStyles from "./app/style/globalStyles";
import App from "./app/App";
import theme from "./app/style/theme";

ReactDOM.render(
  <React.StrictMode>
    <GloblStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
