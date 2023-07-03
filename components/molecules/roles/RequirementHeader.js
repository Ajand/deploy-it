/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

const RequirementHeader = ({ title, onBack }) => {
  return (
    <div
      css={css`
        padding: 1em;
        display: flex;
        align-items: center;
      `}
    >
      <IconButton onClick={onBack} size="small">
        <ArrowBack />
      </IconButton>
      <Typography
        css={css`
          margin-left: 0.5em;
        `}
        variant="h6"
      >
        {title}
      </Typography>
    </div>
  );
};

export default RequirementHeader;
