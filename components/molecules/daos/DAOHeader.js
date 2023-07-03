/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography, Divider, Avatar, Paper } from "@mui/material";
import { TextExpander } from "../../atoms";

const DAOHeader = ({ dense, dao }) => {
  if (!dao) return <></>;

  const { name, description, avatar, cover } = dao;

  return (
    <Paper
      css={css`
        margin-bottom: 1em;
        border-radius: 0.8em;
      `}
    >
      <div
        css={css`
          position: relative;
        `}
      >
        <img
          css={(theme) => css`
            width: 100%;
            height: ${dense ? "120px" : "230px"};
            object-fit: cover;
            border-radius: ${dense ? "0.6em" : "0.8em"};
            border: ${dense ? "2px" : "3px"} solid
              ${theme.palette.background.default};
          `}
          src={cover}
        />
        <div
          css={css`
            position: absolute;
            bottom: -30px;
            left: ${dense ? "0px" : "30px"};
            width: ${dense ? "100%" : "00px"};
            display: ${dense ? "flex" : ""};
            justify-content: ${dense ? "center" : ""};
          `}
        >
          <Avatar
            css={(theme) => css`
              height: ${dense ? "80px" : "120px"};
              width: ${dense ? "80px" : "120px"};
              border: ${dense ? "2px" : "4px"} solid
                ${theme.palette.background.default};
            `}
            src={avatar}
          />
        </div>
      </div>
      <div
        css={css`
          margin-top: 1em;
          padding: 1em;
        `}
      >
        <Typography variant="h6">{name}</Typography>
        <Typography variant={dense ? "body2" : "body1"}>
          {dense ? <TextExpander body={description} min={140} /> : description}
        </Typography>
      </div>
    </Paper>
  );
};

export default DAOHeader;
