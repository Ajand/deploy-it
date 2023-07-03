/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers";

const TimeInDAO = () => {
  return (
    <div
      css={css`
        margin-top: 0.5em;
      `}
    >
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          css={css`
            width: 100%;
          `}
          label="Joined the DAO Before Date"
          size="small"
        />
      </LocalizationProvider>
    </div>
  );
};

export default TimeInDAO;
