/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar } from "@mui/material";
import { PaddedContainer } from "../../atoms";
import { SendTokenTemplateForm, GeneralTemplateForm } from "..";

const ProposalInfoForm = ({ proposalInfo, setProposalInfo }) => {
  const renderProperTemplate = () => {
    switch (proposalInfo.template) {
      case "general":
        return (
          <div>
            <GeneralTemplateForm
              proposalInfo={proposalInfo}
              setProposalInfo={setProposalInfo}
            />
          </div>
        );
      case "send-tokens":
        return (
          <div>
            <SendTokenTemplateForm />
          </div>
        );
    }
  };

  return <PaddedContainer>{renderProperTemplate()}</PaddedContainer>;
};
export default ProposalInfoForm;
