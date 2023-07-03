/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Paper,
  Grid,
  Typography,
  TextField,
  Divider,
  Button,
} from "@mui/material";
import { UPListManager } from "../";
import { useState } from "react";
import { useRouter } from "next/router";

const CreateVaultForm = () => {
  const router = useRouter();
  const [ups, setUps] = useState(new Set([]));
  const daoRoute = `/daos/${router.query.id}`;

  return (
    <Paper
      css={css`
        padding: 1em;
      `}
    >
      <Typography variant="h5">Create a new vault</Typography>
      <Divider
        css={css`
          margin-top: 0.5em;
          margin-bottom: 1em;
        `}
      />
      <Grid container spacing={2}>
        <Grid item md={4} sm={12}>
          <TextField
            size="small"
            label="Vault Name"
            color="simple"
            fullWidth
            name="role-name"
          />
        </Grid>
        <Grid item md={8} sm={12}>
          <UPListManager
            label="Multisigner UP Address"
            ups={ups}
            setUps={setUps}
            dense
          />
        </Grid>
      </Grid>
      <Divider
        css={css`
          margin-top: 0.5em;
          margin-bottom: 0.5em;
        `}
      />
      <div
        css={css`
          display: flex;
          flex-direction: row-reverse;
        `}
      >
        <Button variant="contained" size="small">
          Create
        </Button>
        <Button
          color="simple"
          css={css`
            margin-right: 0.5em;
          `}
          size="small"
          onClick={() => router.push(`${daoRoute}/vaults`)}
        >
          Cancel
        </Button>
      </div>
    </Paper>
  );
};

export default CreateVaultForm;
