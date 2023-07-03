/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar } from "@mui/material";
import { PaddedContainer } from "../../atoms";

const ParametersList = ({ proposalInfo }) => {
  const { votingParameters } = proposalInfo;

  const paramsList = votingParameters
    ? [
        { label: "Voting Token", value: votingParameters.votingToken },
        { label: "Voting Type", value: votingParameters.votingType },
        {
          label: "Participation Rate",
          value: votingParameters.participationRate,
        },
        { label: "Majority", value: votingParameters.majority },
        {
          label: "Minimum Voting Delay",
          value: votingParameters.minimumVotingDelay,
        },
        {
          label: "Minimum Voting Periode",
          value: votingParameters.minimumVotingPeriode,
        },
        {
          label: "Minimum Execution Delay",
          value: votingParameters.minimumExecutionDelay,
        },
      ]
    : [];

  return (
    <PaddedContainer>
      {paramsList.map((param) => (
        <div
          key={param.label}
          css={css`
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5em;
          `}
        >
          <Typography
            css={css`
              font-size: 1.1em;
            `}
            variant="body1"
          >
            {param.label}
          </Typography>
          <Typography
            css={css`
              font-size: 1.1em;
            `}
            variant="body1"
          >
            {param.value}
          </Typography>
        </div>
      ))}
    </PaddedContainer>
  );
};

export default ParametersList;
