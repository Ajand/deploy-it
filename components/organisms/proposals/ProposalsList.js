/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import { ProposalsTable } from "..";
import { useProposals } from "../../../data/hooks";

const ProposalsList = () => {
  const router = useRouter();
  const daoRoute = `/daos/${router.query.id}`;

  const { proposals } = useProposals(router.query.id);

  console.log(proposals);

  return (
    <div
      css={css`
        margin-top: 2em;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <Typography variant="h6">Proposals</Typography>
        <Button
          onClick={() => router.push(`${daoRoute}/proposals/create`)}
          size="small"
          variant="text"
          color="primary"
        >
          New Proposal
        </Button>
      </div>
      <div
        css={css`
          margin-top: 1em;
        `}
      >
        <ProposalsTable proposals={proposals} />
      </div>
    </div>
  );
};

export default ProposalsList;
