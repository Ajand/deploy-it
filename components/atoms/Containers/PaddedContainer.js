/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const PaddedContainer = ({ children, lowTop }) => {
  return (
    <div
      css={css`
        padding: ${lowTop ? "1em 2em" : "2em"};
        height: calc(100% - 85px);
      `}
    >
      {children}
    </div>
  );
};

export default PaddedContainer;
