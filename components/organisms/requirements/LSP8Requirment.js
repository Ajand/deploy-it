/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { LSP4Input } from "../";

const LSP8Requirement = () => {
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
    </div>
  );
};

export default LSP8Requirement;
