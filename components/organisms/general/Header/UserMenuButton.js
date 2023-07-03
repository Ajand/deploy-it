/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { useState, useContext, useEffect } from "react";

import { UserMenuButtonBase } from "../../../molecules";
import UserHeaderMenu from "./UserHeaderMenu";
import { DataContext } from "../../../../data/contexts";

const UserMenuButton = () => {
  /// TODO this need to be completed to have additional functionalities and stuffs
  const { upAddress, getUPAddress, getUPData } = useContext(DataContext);
  const [upData, setUpData] = useState(null);

  const isConnected = !!upAddress;

  useEffect(() => {
    if (upAddress) {
      const main = async () => {
        try {
          const updata = await getUPData(upAddress);
          setUpData(updata);
        } catch (err) {
          console.log(err);
        }
      };

      main();
    }
  }, [upAddress]);

  const connect = () => {
    getUPAddress();
  };

  const [anchorEl, setAnchorEl] = useState(false);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      {isConnected ? (
        <div
          css={css`
            margin-left: 1em;
          `}
        >
          <UserMenuButtonBase
            upAddress={upAddress}
            upData={upData}
            onClick={handleMenu}
          />
          <>
            <UserHeaderMenu
              upData={upData}
              handleClose={handleClose}
              anchorEl={anchorEl}
            />
          </>
        </div>
      ) : (
        <Button
          css={css`
            margin-right: 0.5em;
            margin-top: 0.35em;
            margin-left: 1em;
          `}
          variant="text"
          color="primary"
          size="small"
          onClick={connect}
        >
          Connect
        </Button>
      )}
    </div>
  );
};

export default UserMenuButton;
