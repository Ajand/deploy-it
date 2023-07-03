/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar } from "@mui/material";

const InfoBox = ({ label, value }) => {
  return (
    <div
      css={css`
        text-align: center;
      `}
    >
      <Typography variant="body2">{label}</Typography>
      <Typography variant="body1">{value}</Typography>
    </div>
  );
};
export default InfoBox;
