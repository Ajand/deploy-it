/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <div
        css={css`
          padding: 3em;
        `}
      ></div>
      <div
        css={(theme) => css`
          background-color: ${theme.palette.background.paper};
          padding: 2em;
          margin-top: 4em;
          position: fixed;
          bottom: 0;
          right: 0;
          left: 0;
        `}
      >
        <Typography variant="body1">
          Created by KEEZ DAO for the LUKSO community
        </Typography>
      </div>
    </div>
  );
};
export default Footer;
