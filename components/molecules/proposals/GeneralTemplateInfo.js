/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar } from "@mui/material";

const GeneralTemplateInfo = ({ proposalInfo }) => {
  if (proposalInfo.submission)
    return (
      <div
        css={css`
          height: 100%;
        `}
      >
        <Typography
          css={css`
            font-weight: bold;
          `}
          variant="body1"
        >
          Proposal options are going to be determined by submission
        </Typography>
      </div>
    );
  return (
    <div>
      <Typography
        css={css`
          font-size: 1.1em;
          margin-bottom: 0.5em;
        `}
        variant="h6"
      >
        Options:
      </Typography>
      {proposalInfo.templateInfo.options.map((option, i) => (
        <Typography
          css={(theme) =>
            css`
              padding: 0.5em 0.75em;
              margin-bottom: 0.45em;
              border: 1px solid ${theme.palette.divider};
              border-radius: 0.5em;
            `
          }
          key={i}
          variant="body1"
        >
          {option}
        </Typography>
      ))}
    </div>
  );
};
export default GeneralTemplateInfo;
