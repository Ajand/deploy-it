/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography, Paper, Avatar, Divider } from "@mui/material";
import { TextExpander, InfoBox } from "../../atoms";

const DAOCard = ({ dao, onClick }) => {
  const { description, avatar, cover, id, membersCount, name, proposalsCount } =
    dao;

  return (
    <Paper
      css={css`
        margin-bottom: 1em;
        border-radius: 0.8em;
        cursor: pointer;
        transition: 200ms;
        &:hover {
          background-color: #302544;
        }
      `}
      onClick={onClick}
    >
      <div
        css={css`
          position: relative;
        `}
      >
        <img
          css={(theme) => css`
            width: 100%;
            height: 120px;
            object-fit: cover;
            border-radius: 0.6em;
            border: 2px solid ${theme.palette.background.default};
          `}
          src={cover}
        />
        <div
          css={css`
            position: absolute;
            bottom: -30px;
            left: 0px;
            width: 100%;
            display: flex;
            justify-content: center;
          `}
        >
          <Avatar
            css={(theme) => css`
              height: 80px;
              width: 80px;
              border: 2px solid ${theme.palette.background.default};
            `}
            src={avatar}
          />
        </div>
      </div>
      <div
        css={css`
          margin-top: 1em;
          padding: 1em;
          min-height: 155px;
        `}
      >
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">
          <TextExpander body={description} min={140} />
        </Typography>
      </div>
      <Divider />
      <div
        css={css`
          padding: 0.75em;
          display: flex;
          justify-content: space-around;
        `}
      >
        <InfoBox label="Members" value={membersCount} />
        <InfoBox label="Proposals" value={proposalsCount} />
      </div>
    </Paper>
  );
};
export default DAOCard;
