/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { TextField } from "@mui/material";

const ProposalsAmount = () => {
  return (
    <div
      css={css`
        margin-top: 0.5em;
      `}
    >
      <TextField
        type="number"
        name="needed-proposals"
        fullWidth
        variant="outlined"
        label="Minimum needed proposals "
      />
    </div>
  );
};

export default ProposalsAmount;
