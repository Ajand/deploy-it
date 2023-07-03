/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const StepperConnector = ({ isActive }) => {
  return (
    <div
      css={(theme) => css`
        position: absolute;
        height: 50px;
        background-color: ${isActive
          ? theme.palette.primary.main
          : theme.palette.background.secondary};
        width: 2px;
        top: 50px;
        left: 24px;
      `}
    ></div>
  );
};

export default StepperConnector;
