import React from "react";
import Router from "./router";
import "./App.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeOptions as dark } from "./themes/dark";
import { themeOptions as light } from "./themes/light";

function App() {
  const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return (
    <ThemeProvider theme={createTheme(!isDark ? dark : light)}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;
