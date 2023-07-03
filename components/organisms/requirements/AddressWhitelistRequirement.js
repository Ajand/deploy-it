/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Divider, IconButton, Button } from "@mui/material";
import { Add, Close } from "@mui/icons-material";
import { UPInput, UPList } from "..";
import { useState } from "react";
import { RequirementHeader } from "../../molecules";
import { ethers } from "ethers";

const AddressWhitelist = ({ onBack }) => {
  const [ups, setUps] = useState(new Set());
  const [address, setAddress] = useState("");

  const addUp = (address) => {
    setUps(new Set([...ups, address.toLowerCase()]));
    setAddress("");
  };

  const removeUp = (address) => {
    let nUps = new Set([...ups]);
    nUps.delete(address);
    setUps(nUps);
  };

  return (
    <div
      css={css`
        width: 400px;
      `}
    >
      <RequirementHeader title="Whitelist Requirement" onBack={onBack} />
      <Divider />
      <div
        css={css`
          padding: 1em;
        `}
      >
        <div
          css={css`
            margin-top: 0.5em;
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: flex-start;
              margin-bottom: 0.25em;
            `}
          >
            <UPInput
              label="Whitelist UP Address"
              value={address}
              setValue={setAddress}
            />
            <IconButton
              css={css`
                margin-left: 0.25em;
              `}
              onClick={() => {
                addUp(address);
              }}
              disabled={!ethers.utils.isAddress(address)}
            >
              <Add />
            </IconButton>
            <Button
              css={css`
                margin-left: 0.25em;
                margin-top: 0.35em;
              `}
              size="small"
            >
              Import
            </Button>
          </div>
        </div>
        <div>
          <UPList
            ups={[...ups]}
            action={{
              icon: Close,
              onClick: (up) => {
                removeUp(up);
              },
            }}
          />
        </div>
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

export default AddressWhitelist;
