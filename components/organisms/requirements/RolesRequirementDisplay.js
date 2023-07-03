/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar } from "@mui/material";

const RolesRequirementDisplay = ({ data }) => {
  const { roles } = data;
  return (
    <div>
      <Typography variant="body1">
        Roles Needed:{" "}
        {roles.map((role, i) => (
          <span key={`${role}-${i}`}>
            <span
              css={(theme) =>
                css`
                  cursor: pointer;
                  color: ${theme.palette.secondary.main};
                `
              }
            >
              {role}
            </span>
            {i !== roles.length - 1 && ", "}
          </span>
        ))}
      </Typography>
    </div>
  );
};
export default RolesRequirementDisplay;
