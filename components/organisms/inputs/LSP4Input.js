/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  ButtonBase,
  Typography,
  Avatar,
  TextField,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useContext, useEffect } from "react";
import LSP4Resolver from "../resolvers/LSP4Resolver";
import { ethers } from "ethers";
import { DataContext } from "../../../data/contexts";

const LSP4Input = ({
  label,
  fullWidth,
  address,
  setAddress,
  full,
  noAction,
}) => {
  // Should check if the value is an address
  // Should get resolve if there is an LSP

  const isAddress = ethers.utils.isAddress(address.toLowerCase());

  const { getLSP4Data } = useContext(DataContext);

  console.log(isAddress);

  useEffect(() => {
    if (isAddress) {
      console.log("here?");
      const main = async () => {
        try {
          const tokenData = await getLSP4Data(address);
          console.log(tokenData);
        } catch (err) {
          console.log(err);
        }
      };

      main();
    }
  }, [address]);

  const readyToResolve = address;

  return (
    <div>
      {full || !readyToResolve ? (
        <TextField
          variant="outlined"
          autoComplete="off"
          fullWidth={fullWidth}
          label={label}
          size={full ? "medium" : "small"}
          name="lsp4-address"
          color="simple"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      ) : null}
      {full && (
        <div
          css={css`
            margin-top: 1em;
          `}
        ></div>
      )}
      {readyToResolve && (
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <LSP4Resolver address={address} />
          {!noAction && (
            <IconButton
              size="small"
              onClick={() => {
                setAddress("");
              }}
            >
              <Close />
            </IconButton>
          )}
        </div>
      )}
    </div>
  );
};

export default LSP4Input;
