/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { StepperIcon, StepperText, StepperConnector } from "../../atoms";

const Stepper = ({ steps, active }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      {steps.map((step, i) => {
        const { label, icon } = step;
        return (
          <div
            css={css`
              width: 300px;
              display: flex;
              margin-bottom: 50px;
              position: relative;
              align-items: center;
            `}
            key={i}
          >
            <StepperIcon isActive={i - 1 < active} icon={icon} />
            <StepperText isActive={i - 1 < active}>{label}</StepperText>

            {steps.length - 1 > i && <StepperConnector isActive={i < active} />}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
