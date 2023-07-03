/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "../../../data/contexts";
import { LSP4Display } from "../../molecules";

const LSP4Resolver = ({ address }) => {
  const { getUPData } = useContext(DataContext);

  useEffect(() => {
    // TODO: This should start the LSP4 Resolving Logic
  }, []);

  const tokenInfo = {
    name: "Sample Token",
    symbol: "SMT",
    creators: ["Keez DAO", "Gang DAO"],
  };

  return (
    <div>
      <LSP4Display
        address={address}
        tokenName={tokenInfo.name}
        tokenSymbol={tokenInfo.symbol}
        creators={tokenInfo.creators}
      />
    </div>
  );
};

export default LSP4Resolver;
