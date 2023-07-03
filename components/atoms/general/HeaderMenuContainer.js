/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const HeaderMenuContainer = ({ children }) => {
  return (
    <div
      css={(theme) => css`
        border-radius: 1000px;
        background-color: ${theme.palette.background.paper};
      `}
    >
      {children}
    </div>
  );
};

export default HeaderMenuContainer;
