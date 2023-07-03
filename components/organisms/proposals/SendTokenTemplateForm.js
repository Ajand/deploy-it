/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { TextField } from "@mui/material";
import { FormRow } from "../../atoms";

const SendTokenTemplateForm = () => {
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
        <TextField label="Vault Name" name="vault-name" fullWidth />
      </FormRow>
      <FormRow>
        <TextField label="Token Address" name="token-address" fullWidth />
      </FormRow>
      <FormRow>
        <TextField label="Token Amount" name="token-amount" fullWidth />
      </FormRow>
      <FormRow>
        <TextField
          label="Receiving Address"
          name="receiving-address"
          fullWidth
        />
      </FormRow>
    </div>
  );
};

export default SendTokenTemplateForm;
