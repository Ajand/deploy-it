/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { ButtonBase, Typography, TextField } from "@mui/material";
import { LSP4Input } from "../";

const LSP7Requirement = () => {
  const [address, setAddress] = useState("");

  return (
    <div>
      <div
        css={css`
          margin-top: 0.5em;
        `}
      >
        <LSP4Input
          label="Token Address"
          value={address}
          setAddress={setAddress}
        />
      </div>
      <div
        css={css`
          margin-top: 0.75em;
        `}
      >
        <TextField
          variant="outlined"
          label="Token Amount"
          size="small"
          name="token-amount"
          color="simple"
          fullWidth
        />
      </div>
    </div>
  );
};

export default LSP7Requirement;
