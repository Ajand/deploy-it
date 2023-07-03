/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Paper, Divider, Button, Typography } from "@mui/material";
import { PaddedContainer } from "../../atoms";
import GovernanceSetting from "./GovernanceSetting";

const GovernanceDetails = () => {
  // If it's not setted it should shows that it must be setted
  // Otherwise it will show the Governance Data
  // With an option to edit the data
  return (
    <Paper>
      <PaddedContainer lowTop>
        <Typography variant="h5">Governance Settings</Typography>
      </PaddedContainer>
      <Divider />

      <GovernanceSetting />
      <Divider />
      <PaddedContainer lowTop>
        <div
          css={css`
            display: flex;
            justify-content: flex-end;
          `}
        >
          <Button variant="contained" color="primary" size="small">
            Set
          </Button>
        </div>
      </PaddedContainer>
    </Paper>
  );
};

export default GovernanceDetails;
