import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const PageHeader = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h4">JSON2CSV</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default PageHeader;
