/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography, Divider } from "@mui/material";

const StepperHeader = ({ title }) => {
  return (
    <div>
      <Typography
        css={css`
          padding: 0.75em 1em;
        `}
        variant="h4"
      >
        {title}
      </Typography>
      <Divider />
    </div>
  );
};

export default StepperHeader;
