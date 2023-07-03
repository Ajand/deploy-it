/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
  Button,
} from "@mui/material";
import { RequirementHeader } from "../../molecules";
import LSP7Requirement from "./LSP7Requirment";
import LSP8Requirement from "./LSP8Requirment";

const TokenRequirement = ({ onBack }) => {
  const [variant, setVariant] = useState("lsp7");

  return (
    <div
      css={css`
        width: 400px;
      `}
    >
      <RequirementHeader title="Token Based Requirement" onBack={onBack} />
      <Divider />
      <div
        css={css`
          padding: 1em;
        `}
      >
        <FormControl
          css={css`
            width: 100%;
          `}
        >
          <FormLabel id="token-type">Token Type</FormLabel>
          <RadioGroup
            aria-labelledby="token-type"
            defaultValue="lsp7"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
            row
            css={css`
              display: flex;
              width: 100%;
            `}
          >
            <FormControlLabel value="lsp7" control={<Radio />} label="LSP-7" />
            <FormControlLabel
              css={css`
                margin-left: 0.5em;
              `}
              value="lsp8"
              control={<Radio />}
              label="LSP-8"
            />
          </RadioGroup>
        </FormControl>

        {variant === "lsp7" ? <LSP7Requirement /> : <LSP8Requirement />}
      </div>
      <Divider />
      <div
        css={css`
          padding: 1em;
          display: flex;
          flex-direction: row-reverse;
        `}
      >
        <Button variant="contained" size="small">
          Add
        </Button>
      </div>
    </div>
  );
};

export default TokenRequirement;
