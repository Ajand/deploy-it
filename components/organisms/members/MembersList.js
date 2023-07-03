/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Paper, Typography, Grid, Divider } from "@mui/material";
import { useRouter } from "next/router";
import { useDAO } from "../../../data/hooks";
import { MemberItem } from "..";

const MembersList = () => {
  const router = useRouter();
  const daoInfo = useDAO(router.query.id);

  if (daoInfo.loading || !daoInfo.data) return <div>Loading ...</div>;

  const dao = daoInfo.data;

  const { members } = dao;

  console.log(members);

  return (
    <Paper
      css={css`
        margin-top: 2em;
      `}
    >
      <Typography
        css={css`
          padding: 1em;
        `}
        variant="h6"
      >
        Members:
      </Typography>
      <Divider />
      <Grid container>
        {members.map((member, i) => (
          <Grid
            key={i}
            css={(theme) => css`
              border-right: ${i % 2 == 0
                ? `1px solid ${theme.palette.divider}`
                : "0px solid black"};
              &:hover {
                background-color: #302544;
              }
              border-bottom: 1px solid ${theme.palette.divider};
              cursor: pointer;
            `}
            item
            md={6}
          >
            <MemberItem key={member.address} member={member} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};
export default MembersList;
