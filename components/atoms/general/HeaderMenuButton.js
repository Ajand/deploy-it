/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IconButton } from "@mui/material";

const HeaderMenuButtonContainer = ({ Icon, selected, onClick }) => {
  return (
    <div
      css={css`
        padding: 0.25em;
        display: inline-block;
      `}
    >
      <IconButton
        onClick={onClick}
        size="small"
        color={selected ? "secondary" : "inherit"}
      >
        {Icon}
      </IconButton>
    </div>
  );
};

export default HeaderMenuButtonContainer;
