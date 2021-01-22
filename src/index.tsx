import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "./theme";

function Root() {
  const [darkState] = useState(true);
  const palletType = darkState ? "dark" : "light";
  return (
    <ThemeProvider theme={theme(palletType)}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root></Root>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
