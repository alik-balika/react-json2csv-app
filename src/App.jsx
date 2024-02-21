import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { green, purple } from "@mui/material/colors";
import PageHeader from "./components/PageHeader";

let theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: green[700],
      },
      secondary: {
        main: purple[600],
      },
    },
  })
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageHeader />
    </ThemeProvider>
  );
};

export default App;
