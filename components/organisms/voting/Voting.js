/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { ButtonBase, Typography, Button } from "@mui/material";
import { DescriptedRadio } from "../../molecules";

const Voting = ({ proposalInfo }) => {
  const [selected, setSelected] = useState(null);

  const isSubmitting = true;
  const options = [
    {
      label: "Yes",
      execution: "TransferFrom(this, 20, 10)",
    },
    {
      label: "No",
      execution: "Null",
    },
  ];

  return (
    <div
      css={css`
        padding: 1em 2em;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          margin-bottom: 1em;
        `}
      >
        <Typography variant="h6">Vote Now</Typography>
        <Button>Add Option</Button>
      </div>
      {options.map((option, i) => (
        <DescriptedRadio
          key={i}
          label={option.label}
          description={option.execution}
          onClick={() => setSelected(i)}
          selected={selected === i}
        />
      ))}
      <div
        css={css`
          margin-top: 0.5em;
          display: flex;
          justify-content: flex-end;
        `}
      >
        <Button disabled={!selected} variant="contained" color="primary">
          Vote
        </Button>
      </div>
    </div>
  );
};
export default Voting;
