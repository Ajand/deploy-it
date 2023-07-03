/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Table,
  TableContainer,
  Paper,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Chip,
} from "@mui/material";
import { SmallUp } from "..";
import moment from "moment";
import { useRouter } from "next/router";

const getStatus = (proposal) => {
  return "Voting";
};

const ProposalsTable = ({ proposals }) => {
  const router = useRouter();

  const daoRoute = `/daos/${router.query.id}`;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="center">Proposer</TableCell>
            <TableCell align="center">Proposed At</TableCell>
            <TableCell align="center">Variant</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {proposals.map((proposal) => (
            <TableRow
              key={proposal.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={() =>
                router.push(`${daoRoute}/proposals/${proposal.id}`)
              }
              css={css`
                cursor: pointer;
              `}
            >
              <TableCell component="th" scope="row">
                {proposal.basic.title}
              </TableCell>
              <TableCell align="center">
                <div
                  css={css`
                    display: flex;
                    justify-content: center;
                  `}
                >
                  <SmallUp address={proposal.basic.proposer} />{" "}
                </div>
              </TableCell>
              <TableCell align="center">
                {moment(proposal.basic.time).format("YY-MM-DD HH:mm")}
              </TableCell>
              <TableCell align="center">
                <Chip size="small" label={proposal.templateInfo.variant} />
              </TableCell>
              <TableCell align="right">{getStatus(proposal)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ProposalsTable;
