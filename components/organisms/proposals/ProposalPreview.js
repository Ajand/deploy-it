/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { ProposalTabs } from "../../molecules";
import { ProposalBasics, WhoCanVoteControl, ParametersList } from "..";

const alltabs = ["Basics", "Submitters", "Voters", "Parameters"];

const ProposalPreview = ({ proposalInfo }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = alltabs.filter((tab) => {
    if (tab === "Submitters" && !proposalInfo.submission) {
      return false;
    }
    return true;
  });

  const renderProperTab = () => {
    switch (tabs[selectedTab]) {
      case "Basics":
        return <ProposalBasics proposalInfo={proposalInfo} />;
      case "Voters":
        return (
          <WhoCanVoteControl
            proposalInfo={proposalInfo}
            label="Voter's requirements:"
            noAction
          />
        );
      case "Submitters":
        return (
          <WhoCanVoteControl
            proposalInfo={proposalInfo}
            label="Submitter's requirements:"
            noAction
          />
        );
      case "Parameters":
        return <ParametersList proposalInfo={proposalInfo} />;
    }
  };

  return (
    <div
      css={css`
        height: calc(100% - 48px - 36.5px);
      `}
    >
      <ProposalTabs
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      {renderProperTab()}
    </div>
  );
};

export default ProposalPreview;
