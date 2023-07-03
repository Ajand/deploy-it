/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const StepperIcon = ({ icon, isActive }) => {
  return (
    <div
      css={(theme) => css`
        background-color: ${isActive
          ? theme.palette.primary.main
          : theme.palette.background.secondary};
        color: ${isActive ? theme.palette.background.secondary : ""};
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1000px;
      `}
    >
      {icon}
    </div>
  );
};

export default StepperIcon;
