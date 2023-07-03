/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar } from "@mui/material";
import { ipfsUrlToNormal } from "../../../data/lib";

const UPResolver = ({ data }) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <div
        css={(theme) => css`
          border: 2px solid ${theme.palette.simple.main};
          border-radius: 100px;
        `}
      >
        <Avatar src={ipfsUrlToNormal(data?.profileImage[0].url)} />
      </div>
      <Typography
        css={css`
          font-weight: 500;
          margin-left: 0.5em;
        `}
        variant="body1"
      >
        {data.name}
      </Typography>
    </div>
  );
};

export default UPResolver;
