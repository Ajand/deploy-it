/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography, TextField, Grid } from "@mui/material";
import { useState } from "react";

const VotingParams = () => {
  const [data, setData] = useState({});
  return (
    <div>
      <Typography
        css={css`
          margin-bottom: 1em;
          margin-top: 1em;
        `}
        variant="h6"
      >
        Voting Params
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <TextField
            label="Participation Rate (%)"
            fullWidth
            variant="outlined"
            size="small"
            autoComplete="off"
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            label="Participation Rate (%)"
            fullWidth
            variant="outlined"
            size="small"
            autoComplete="off"
          />
        </Grid>
        <Grid item md={12}>
          <TextField
            label="Minimum Voting Time (days)"
            fullWidth
            variant="outlined"
            size="small"
            autoComplete="off"
          />
        </Grid>{" "}
        <Grid item md={12}>
          <TextField
            label="Minimum Voting Periode (days)"
            fullWidth
            variant="outlined"
            size="small"
            autoComplete="off"
          />
        </Grid>{" "}
        <Grid item md={12}>
          <TextField
            label="Minimum Execution Delay (days)"
            fullWidth
            variant="outlined"
            size="small"
            autoComplete="off"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default VotingParams;
