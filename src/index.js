import React from "react";
import ReactDOM from "react-dom";
import GloblStyles from "./app/style/GlobalStyles";
import App from "./app/App";

ReactDOM.render(
  <React.StrictMode>
    <GloblStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
