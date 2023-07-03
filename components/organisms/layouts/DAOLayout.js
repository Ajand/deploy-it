/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container, Grid } from "@mui/material";
import DAOMenu from "../daos/DAOMenu";
import { DAOHeader } from "../../molecules";
import { ProposalHeader } from "..";
import { useRouter } from "next/router";
import { useDAO } from "../../../data/hooks";

const DAOLayout = ({ children, sideHeader, smallTop }) => {
  const router = useRouter();
  const daoInfo = useDAO(router.query.id);

  if (daoInfo.loading) return <div>Loading ...</div>;

  const dao = daoInfo.data;

  return (
    <Container
      css={css`
        margin-top: 1em;
        margin-bottom: 150px;
      `}
    >
      {smallTop ? (
        <>
          <Grid spacing={0} container>
            <Grid item md={12}>
              <ProposalHeader dao={dao} />
            </Grid>
            <Grid item md={12}>
              {children}
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          {" "}
          <Grid spacing={4} container>
            <Grid item md={4} lg={3}>
              {sideHeader ? <DAOHeader dao={dao} dense /> : null}
              <DAOMenu />
            </Grid>
            <Grid item md={8} lg={9}>
              {sideHeader ? null : <DAOHeader dao={dao} />}
              {children}
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default DAOLayout;
