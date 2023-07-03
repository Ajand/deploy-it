/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { TextField, Typography, Switch } from "@mui/material";
import { FormRow } from "../../atoms";
import ProposalOptionsList from "./ProposalOptionsList";

const GeneralTemplateForm = ({ proposalInfo, setProposalInfo }) => {
  return (
    <div>
      <FormRow>
        <TextField
          label="Proposal Title"
          type="text"
          name="proposal-title"
          fullWidth
        />
      </FormRow>
      <FormRow>
        <TextField
          label="Proposal Description"
          multiline
          name="proposal-description"
          fullWidth
          minRows={2}
        />
      </FormRow>
      <FormRow>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <Typography variant="body1">
            Would you like to allow submissions?
          </Typography>
          <Switch
            color="primary"
            checked={proposalInfo.submission}
            onChange={(e) =>
              setProposalInfo("submission")(!proposalInfo.submission)
            }
          />
        </div>
      </FormRow>
      {!proposalInfo.submission && (
        <FormRow>
          <ProposalOptionsList />
        </FormRow>
      )}
    </div>
  );
};
export default GeneralTemplateForm;
