/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Paper, Grid, Typography, TextField, Divider } from "@mui/material";
import RoleRequirementControl from "./RoleRequirementControl";
import { PermissionsBox } from "../../molecules";

const CreateRoleForm = () => {
  return (
    <Paper
      css={css`
        padding: 1em;
      `}
    >
      <Typography variant="h5">Create a new role</Typography>
      <Divider
        css={css`
          margin-top: 0.25em;
          margin-bottom: 1em;
        `}
      />
      <Grid container spacing={2}>
        <Grid item md={6}>
          <TextField
            size="small"
            label="Name"
            color="simple"
            fullWidth
            name="role-name"
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            size="small"
            label="Description"
            multiline
            color="simple"
            fullWidth
            name="role-description"
          />
        </Grid>

        <Grid item md={6}>
          <RoleRequirementControl />
        </Grid>
        <Grid item md={6}>
          <Typography variant="subtitle2">Permissions:</Typography>
          <PermissionsBox permissions={[]} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CreateRoleForm;
