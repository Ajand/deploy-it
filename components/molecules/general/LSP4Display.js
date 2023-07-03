/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar } from "@mui/material";
import { formatAddress } from "../../../data/lib";

const LSP4Display = ({ address, tokenName, tokenSymbol, creators }) => {
  return (
    <div>
      <Typography variant="body1">
        {tokenName} -{" "}
        <span
          css={(theme) =>
            css`
              color: ${theme.palette.secondary.main};
            `
          }
        >
          ${tokenSymbol}
        </span>
      </Typography>
      <Typography variant="subtitle2">{formatAddress(address)}</Typography>
      <Typography variant="body2">Creators: {creators.join(", ")}</Typography>
    </div>
  );
};

export default LSP4Display;
