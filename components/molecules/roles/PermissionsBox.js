/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar, Checkbox } from "@mui/material";

const PermissionsBox = ({ noAction, permissions }) => {
  return (
    <div>
      <div>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <Checkbox
            css={css`
              margin-right: 0.25em;
            `}
            size="small"
            checked={permissions.includes("create-proposal")}
            disabled={noAction}
          />
          <Typography variant="body1">Create Proposal</Typography>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <Checkbox
            css={css`
              margin-right: 0.25em;
            `}
            size="small"
            checked={permissions.includes("create-role")}
            disabled={noAction}
          />
          <Typography variant="body1">Create Role</Typography>
        </div>
      </div>
    </div>
  );
};

export default PermissionsBox;
