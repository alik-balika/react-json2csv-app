import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Button, TextField, Typography } from "@mui/material";

const PageContent = () => {
  return (
    <Grid container spacing={2} m={2}>
      <Grid xs={12} sm={6}>
        <Box
          sx={{
            m: 1,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">JSON</Typography>
          <Button variant="outlined" size="small">
            Sample JSON
          </Button>
        </Box>
        <TextField
          fullWidth
          multiline
          id="jsonText"
          variant="outlined"
          placeholder="Please enter some JSON"
          minRows={5}
        />
      </Grid>
      <Grid xs={12} sm={6}>
        <Box m={1}>
          <Typography variant="h5">CSV</Typography>
        </Box>
        <TextField
          fullWidth
          id="filled-basic"
          variant="outlined"
          disabled
          defaultValue="No JSON text found"
          multiline
          minRows={5}
        />
      </Grid>
      <Grid xs={12}>
        <Button variant="contained" fullWidth size="large">
          Clear
        </Button>
      </Grid>
      <Grid xs={12}>
        <Button variant="contained" fullWidth size="large">
          Convert
        </Button>
      </Grid>
    </Grid>
  );
};

export default PageContent;
