import React from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { green, purple } from "@mui/material/colors";
import PageHeader from "./components/PageHeader";
import PageContent from "./components/PageContent";

let theme = createTheme({
  palette: {
    primary: {
      main: green[700],
    },
    secondary: {
      main: purple[600],
    },
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageHeader />
      <PageContent />
    </ThemeProvider>
  );
};

export default App;
