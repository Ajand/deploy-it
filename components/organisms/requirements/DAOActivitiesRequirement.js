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
  Grid,
} from "@mui/material";
import { RequirementHeader } from "../../molecules";
import LSP7Requirement from "./LSP7Requirment";
import TimeInDAO from "./TimeInDAO";
import ProposalsAmount from "./ProposalsAmount";
import VoteAmounts from "./VoteAmounts";
import DAORoles from "./DAORoles";
import UPInput from "../inputs/UPInput";

const DAOActivityRequirement = ({ onBack }) => {
  const [variant, setVariant] = useState("Time");
  const [address, setAddress] = useState("");

  const variants = [
    {
      label: "Time",
      content: TimeInDAO,
    },
    {
      label: "Vote Amounts",
      content: VoteAmounts,
    },
    {
      label: "Proposals",
      content: ProposalsAmount,
    },
    {
      label: "Roles",
      content: DAORoles,
    },
  ];

  const TargetComponent = variants.find(
    (vari) => vari.label == variant
  ).content;

  return (
    <div
      css={css`
        width: 400px;
      `}
    >
      <RequirementHeader title="DAO Activity Requirment" onBack={onBack} />
      <Divider />
      <div
        css={css`
          padding: 1em;
        `}
      >
        <div
          css={css`
            margin-bottom: 0.75em;
          `}
        >
          <UPInput
            label="Target DAO Address"
            value={address}
            setValue={setAddress}
          />
        </div>
        <FormControl
          css={css`
            width: 100%;
          `}
        >
          <FormLabel id="activity-type">Activity Type</FormLabel>
          <RadioGroup
            aria-labelledby="activity-type"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
            row
            css={css`
              display: flex;
              width: 100%;
            `}
          >
            <Grid container>
              {variants.map((vari) => (
                <Grid key={vari.label} item sm={6}>
                  <FormControlLabel
                    value={vari.label}
                    control={<Radio />}
                    label={vari.label}
                  />
                </Grid>
              ))}
            </Grid>
          </RadioGroup>
        </FormControl>
        <TargetComponent />
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

export default DAOActivityRequirement;
