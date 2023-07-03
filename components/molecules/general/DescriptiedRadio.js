/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Radio } from "@mui/material";

const DescriptedRadio = ({ onClick, label, selected, description }) => {
  return (
    <div
      css={(theme) => css`
        border: 2px solid
          ${selected ? theme.palette.primary.main : theme.palette.divider};
        margin-bottom: 0.5em;
        padding: 0.5em 0.75em;
        border-radius: 8px;
        cursor: pointer;
        transition: 200ms;
        &:hover {
          border-color: ${theme.palette.primary.dark};
        }
      `}
      onClick={onClick}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        `}
      >
        <div
          css={css`
            width: 80%;
          `}
        >
          <Typography
            variant="body1"
            css={css`
              font-weight: 600;
            `}
          >
            {label}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </div>
        <Radio color="primary" checked={selected} />
      </div>
    </div>
  );
};

export default DescriptedRadio;
