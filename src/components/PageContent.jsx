import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, TextField, Typography } from "@mui/material";

const PageContent = () => {
  return (
    <Grid container spacing={2} m={2}>
      <Grid xs={12} sm={6}>
        <Typography variant="h5" gutterBottom>
          JSON
        </Typography>
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
        <Typography variant="h5" gutterBottom>
          CSV
        </Typography>
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
