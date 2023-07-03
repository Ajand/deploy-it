/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Toolbar, Typography, Container } from "@mui/material";

import HeaderMenu from "./HeaderMenu";
import UserMenuButton from "./UserMenuButton";

const Header = () => {
  return (
    <Toolbar
      css={css`
        margin-top: 0.25em;
        display: flex;
        justify-content: space-between;
      `}
    >
      <div>
        <Typography variant="h6">KEEZ</Typography>
      </div>

      <div
        css={css`
          display: flex;
        `}
      >
        <HeaderMenu />
        <UserMenuButton />
      </div>
    </Toolbar>
  );
};

export default Header;
