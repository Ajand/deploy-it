/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Paper, Typography, Grid, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { RequirementControl } from "..";
import { PermissionsBox } from "../../molecules";

const RoleCard = ({ role }) => {
  const { name, description, requirements, permissions } = role;
  return (
    <Paper
      css={css`
        padding: 1em 1em;
      `}
    >
      <Grid container spacing={2}>
        <Grid item md={4}>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <Typography
              css={css`
                margin-bottom: 0.5em;
              `}
              variant="h6"
            >
              {role.name}
            </Typography>
            <div>
              <IconButton
                css={css`
                  margin-right: 0.25em;
                `}
                size="small"
              >
                <Edit
                  css={css`
                    width: 20px;
                    height: 20px;
                  `}
                />
              </IconButton>
              <IconButton>
                <Delete
                  css={css`
                    width: 20px;
                    height: 20px;
                  `}
                  size="small"
                />
              </IconButton>
            </div>
          </div>

          <Typography variant="body1">{role.description}</Typography>
          <div
            css={css`
              margin-top: 0.5em;
            `}
          >
            <Typography variant="subtitle2">Permissions:</Typography>
            <PermissionsBox permissions={permissions} noAction />
          </div>
        </Grid>
        <Grid item md={8}>
          <div>
            <RequirementControl
              requirements={requirements}
              label={`${role.name} Requirements:`}
              noAction
            />
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RoleCard;
