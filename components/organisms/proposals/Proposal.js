/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Grid, Paper } from "@mui/material";
import { useRouter } from "next/router";
import { useProposal } from "../../../data/hooks";
import { ProposalBasics, WhoCanVoteControl, ParametersList, Voting } from "..";
import { ProposalTabs } from "../../molecules";

const alltabs = ["Parameters", "Submitters", "Voters"];

const Proposal = () => {
  const router = useRouter();
  const proposal = useProposal(router.query.id, router.query.proposalId);
  const [selectedTab, setSelectedTab] = useState(0);

  if (proposal.loading) return <div>Loading</div>;

  const tabs = alltabs.filter((tab) => {
    if (tab === "Submitters" && !proposal.data) {
      return false;
    }
    return true;
  });

  const renderProperTab = () => {
    switch (tabs[selectedTab]) {
      case "Voters":
        return (
          <WhoCanVoteControl
            label="Voter's requirements:"
            noAction
            requirements={proposal.data.votersRequirements}
          />
        );
      case "Submitters":
        return (
          <WhoCanVoteControl
            proposalInfo={proposal.data}
            label="Submitter's requirements:"
            noAction
            requirements={proposal.data.submissionRequirements}
          />
        );
      case "Parameters":
        return <ParametersList proposalInfo={proposal.data} />;
    }
  };

  return (
    <Paper
      css={css`
        margin-top: 1em;
      `}
    >
      <Grid container>
        <Grid item md={6}>
          <ProposalBasics noOption proposalInfo={proposal.data} />
        </Grid>
        <Grid
          css={(theme) => css`
            border-left: 1px solid ${theme.palette.divider};
          `}
          item
          md={6}
        >
          <Voting proposalInfo={proposal.data} />
          <ProposalTabs
            tabs={tabs}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
          {renderProperTab()}
        </Grid>
      </Grid>
    </Paper>
  );
};
export default Proposal;
