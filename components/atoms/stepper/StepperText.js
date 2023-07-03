/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar } from "@mui/material";

const StepperText = ({ isActive, children }) => {
  return (
    <Typography
      css={(theme) => css`
        margin-left: 1em;
        color: ${isActive
          ? theme.palette.text.primary
          : theme.palette.text.disabled};
        font-weight: 600;
      `}
      variant="body1"
    >
      {children}
    </Typography>
  );
};

export default StepperText;
