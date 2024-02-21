import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Button, TextField, Typography } from "@mui/material";
import convertJSONtoCSV from "../converter";

const PageContent = () => {
  const [JSONText, setJSONText] = useState("");
  const [CSVText, setCSVText] = useState("");
  const [JSONParseError, setJSONParseError] = useState({
    error: false,
    message: "",
  });

  const convert = () => {
    let parsedJSON = parseJSON();
    if (!parsedJSON) return;

    let csvData = convertJSONtoCSV(parsedJSON);

    if (csvData === "NESTED_OBJECT_ERROR") {
      setJSONParseError({
        error: true,
        message: "Nested JSON is not supported.",
      });
      return;
    }

    setCSVText(csvData);
  };

  const parseJSON = () => {
    let parsedJSON = null;
    try {
      parsedJSON = JSON.parse(JSONText);
      setJSONParseError({ error: false, message: "" });
    } catch (error) {
      setJSONParseError({ error: true, message: "Invalid JSON!" });
    }

    return parsedJSON;
  };

  const clear = () => {
    setJSONText("");
    setCSVText("");
  };

  const setSampleJSONText = () => {
    setJSONText(
      `[
  {"Id":1,"UserName":"Sam Smith"},
  {"Id":2,"UserName":"Fred Frankly"},
  {"Id":1,"UserName":"Zachary Zupers"}
]`
    );
  };

  return (
    <Grid container spacing={2} m={2}>
      <Grid xs={12} sm={6}>
        <Box
          sx={{
            my: 1,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">JSON</Typography>
          <Button variant="outlined" size="small" onClick={setSampleJSONText}>
            Sample JSON
          </Button>
        </Box>
        <TextField
          fullWidth
          multiline
          id="jsonText"
          variant="outlined"
          placeholder="Please enter JSON text here"
          minRows={5}
          value={JSONText}
          onChange={(e) => setJSONText(e.target.value)}
          error={JSONParseError.error}
          helperText={JSONParseError.message}
        />
      </Grid>
      <Grid xs={12} sm={6}>
        <Box my={1}>
          <Typography variant="h5">CSV</Typography>
        </Box>
        <TextField
          fullWidth
          id="filled-basic"
          variant="outlined"
          placeholder="No JSON text found"
          disabled
          multiline
          minRows={5}
          value={CSVText}
          sx={{
            "& .MuiInputBase-input.Mui-disabled": {
              WebkitTextFillColor: "#000000",
            },
          }}
        />
      </Grid>
      <Grid xs={12}>
        <Button variant="contained" fullWidth size="large" onClick={clear}>
          Clear
        </Button>
      </Grid>
      <Grid xs={12}>
        <Button variant="contained" fullWidth size="large" onClick={convert}>
          Convert
        </Button>
      </Grid>
    </Grid>
  );
};

export default PageContent;
