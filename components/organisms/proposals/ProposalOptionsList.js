/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  ButtonBase,
  Typography,
  Avatar,
  TextField,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { Add, Close } from "@mui/icons-material";

const ProposalOptionsList = () => {
  const [options, setOptions] = useState(["", ""]);

  const setOption = (key) => (value) => {
    setOptions(
      [...options].map((o, i) => {
        if (i === key) {
          return value;
        }
        return o;
      })
    );
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const removeOption = (key) => {
    if (options.length > 2) {
      const op = [...options];
      setOptions(op.filter((o, i) => i !== key));
    }
  };

  return (
    <div>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <Typography variant="h6">Options</Typography>

        <IconButton onClick={addOption} color="primary">
          <Add />
        </IconButton>
      </div>
      {options.map((option, i) => (
        <div
          css={css`
            display: flex;
            margin-top: 0.75em;
          `}
          key={i + 1}
        >
          <TextField
            autoComplete="off"
            fullWidth
            size="small"
            label={`Option ${i + 1}`}
            value={options[i]}
            onChange={(e) => setOption(i)(e.target.value)}
          />
          <IconButton
            css={css`
              margin-left: 0.5em;
            `}
            disabled={options.length < 3}
            color="error"
            onClick={() => removeOption(i)}
          >
            <Close />
          </IconButton>
        </div>
      ))}
    </div>
  );
};

export default ProposalOptionsList;
