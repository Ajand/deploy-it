/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PaddedContainer } from "../../atoms";
import { TokenManagerList } from "..";
import VotingTypeSelector from "./VotingTypeSelector";
import VotingParams from "./VotingParams";

const GovernanceSetting = () => {
  return (
    <PaddedContainer>
      <TokenManagerList
        label="Governance Tokens"
        ups={new Set([])}
        setUps={() => {}}
      />
      <VotingTypeSelector />
      <VotingParams />
    </PaddedContainer>
  );
};
export default GovernanceSetting;
