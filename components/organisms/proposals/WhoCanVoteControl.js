/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRoles } from "../../../data/hooks";
import { RequirementControl } from "..";
import { PaddedContainer } from "../../atoms";

const WhoCanVoteControl = ({ label, noAction, requirements }) => {
  const roles = useRoles();

  const reqs = requirements
    ? requirements
    : roles[1]
    ? roles[0].requirements
    : { items: [], relations: "" };

  return (
    <PaddedContainer>
      <RequirementControl
        label={label}
        requirements={reqs}
        noAction={noAction}
      />
    </PaddedContainer>
  );
};

export default WhoCanVoteControl;
