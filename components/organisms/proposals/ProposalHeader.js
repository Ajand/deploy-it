/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Paper, Typography, Avatar, Skeleton } from "@mui/material";
import { useRouter } from "next/router";
import { useProposal, useDAO } from "../../../data/hooks";

const ProposalHeader = () => {
  const router = useRouter();
  const dao = useDAO(router.query.id);
  const proposal = useProposal(router.query.id, router.query.proposalId);
  const loading = dao.loading && dao.proposal;

  console.log(dao.data);

  return (
    <Paper
      css={css`
        margin-bottom: 1em;
        border-radius: 0.8em;
        padding: 1em;
        display: flex;
        align-items: center;
      `}
    >
      {loading ? (
        <Skeleton variant="circular" width={60} height={60} />
      ) : (
        <Avatar
          css={(theme) => css`
            height: 60px;
            width: 60px;
            border: 3px solid ${theme.palette.background.default};
          `}
          src={dao.data?.avatar}
        />
      )}
      <div
        css={css`
          margin-left: 0.5em;
        `}
      >
        {loading ? (
          <Skeleton variant="rounded" width={200} height={25} />
        ) : (
          <Typography variant="h6">{dao.data?.name}</Typography>
        )}
        {loading ? (
          <Skeleton
            css={css`
              margin-top: 0.5em;
            `}
            variant="rounded"
            width={350}
            height={18}
          />
        ) : (
          <div>
            <Typography variant="body1">
              <span
                css={(theme) =>
                  css`
                    cursor: pointer;
                    &:hover {
                      color: ${theme.palette.primary.main};
                    }
                  `
                }
              >
                Proposals
              </span>{" "}
              &gt;{" "}
              <span
                css={(theme) =>
                  css`
                    cursor: pointer;
                    &:hover {
                      color: ${theme.palette.primary.main};
                    }
                  `
                }
              >
                {proposal.data?.basic?.title}
              </span>
            </Typography>
          </div>
        )}
      </div>
    </Paper>
  );
};
export default ProposalHeader;
