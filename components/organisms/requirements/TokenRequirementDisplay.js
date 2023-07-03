/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar } from "@mui/material";
import { LSP4Resolver } from "..";

const TokenRequirementDisplay = ({ data }) => {
  const { variant, tokenAddress, tokenAmount } = data;

  return (
    <div>
      <LSP4Resolver address={tokenAddress} />
      {tokenAmount ? (
        <Typography variant="body1">
          Token Amount:{" "}
          <span
            css={(theme) =>
              css`
                color: ${theme.palette.secondary.main};
              `
            }
          >
            {tokenAmount}
          </span>
        </Typography>
      ) : null}
    </div>
  );
};

export default TokenRequirementDisplay;
