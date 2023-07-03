/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Divider, Button } from "@mui/material";
import { RequirementHeader } from "../../molecules";

import RolesSelect from "../inputs/RolesSelector";

const OtherRoleRequirement = ({ onBack }) => {
  return (
    <div
      css={css`
        width: 400px;
      `}
    >
      <RequirementHeader title="Other Role Requirement" onBack={onBack} />
      <Divider />
      <div
        css={css`
          padding: 1em;
        `}
      >
        <RolesSelect multi label="Roles needed to have" />
      </div>
      <Divider />
      <div
        css={css`
          padding: 1em;
          display: flex;
          flex-direction: row-reverse;
        `}
      >
        <Button variant="contained" size="small">
          Add
        </Button>
      </div>
    </div>
  );
};

export default OtherRoleRequirement;
