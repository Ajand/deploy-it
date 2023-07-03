/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";

const StepperAction = ({
  nextEnabled,
  backEnabled,
  next,
  back,
  isFinish,
  finalTitle,
  onFinish,
}) => {
  return (
    <div
      css={(theme) =>
        css`
          padding: 1.5em 2em;
          border-top: 1px solid ${theme.palette.divider};
          display: flex;
          flex-direction: row-reverse;
        `
      }
    >
      <div>
        <Button
          css={css`
            margin-right: 0.5em;
          `}
          color="simple"
          variant="text"
          disabled={!backEnabled}
          onClick={back}
        >
          Back
        </Button>
        {!isFinish ? (
          <Button
            onClick={next}
            disabled={!nextEnabled}
            color="primary"
            variant="contained"
          >
            Next
          </Button>
        ) : (
          <Button onClick={onFinish} color="primary" variant="contained">
            {finalTitle}
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepperAction;
