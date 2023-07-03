/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IconButton } from "@mui/material";
import { Add, Close } from "@mui/icons-material";
import { LSP4Input, UPList } from "..";
import { useState } from "react";
import { ethers } from "ethers";

const TokenManagerList = ({ label, ups, setUps, dense }) => {
  const [input, setInput] = useState("");

  const addUp = (address) => {
    setUps(new Set([...ups, address.toLowerCase()]));
    setInput("");
  };

  const removeUp = (address) => {
    let nUps = new Set([...ups]);
    nUps.delete(address);
    setUps(nUps);
  };

  return (
    <div>
      <div
        css={css`
          display: flex;
          align-items: flex-start;
          margin-bottom: ${dense ? "0px" : "1em"};
        `}
      >
        <div
          css={css`
            width: 100%;
          `}
        >
          <LSP4Input
            label={label}
            address={input}
            setAddress={setInput}
            full
            noAction
            fullWidth
          />
        </div>
        <IconButton
          css={css`
            margin-left: 1em;
            margin-top: 0.35em;
          `}
          onClick={() => {
            addUp(input);
          }}
          disabled={!ethers.utils.isAddress(input)}
        >
          <Add />
        </IconButton>
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
  );
};

export default TokenManagerList;
