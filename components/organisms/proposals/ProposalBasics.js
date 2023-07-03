/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar, Chip } from "@mui/material";
import { PaddedContainer } from "../../atoms";
import SmallUp from "../ups/SmallUp";
import moment from "moment";
import { GeneralTemplateInfo } from "../../molecules";

const ProposalBasics = ({ proposalInfo, noOption }) => {
  const renderTemplateSpecificInfo = () => {
    if (proposalInfo.templateInfo.variant === "General") {
      return <GeneralTemplateInfo proposalInfo={proposalInfo} />;
    } else {
    }
  };

  return (
    <div
      css={css`
        min-height: 100%;
      `}
    >
      <PaddedContainer lowTop>
        <Typography variant="h6">{proposalInfo.basic.title}</Typography>
        <div
          css={css`
            margin-bottom: 0.5em;
            margin-top: 0.25em;
            display: flex;
            justify-content: space-between;
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <SmallUp address={proposalInfo.basic.proposer} />{" "}
            <span
              css={(theme) =>
                css`
                  border-right: 2px solid ${theme.palette.primary.text};
                  height: 16px;
                  margin-left: 0.35em;
                  margin-right: 0.35em;
                `
              }
            ></span>
            <Typography variant="subtitle2">
              {moment(proposalInfo.basic.time).format("YY-MM-DD HH:mm")}
            </Typography>
          </div>
          <Chip size="small" label={proposalInfo.templateInfo.variant} />
        </div>
        <Typography variant="body1">
          {proposalInfo.basic.description}
        </Typography>
        {noOption ? null : (
          <div
            css={css`
              margin-top: 1em;
            `}
          >
            {renderTemplateSpecificInfo()}
          </div>
        )}
      </PaddedContainer>
    </div>
  );
};

export default ProposalBasics;
