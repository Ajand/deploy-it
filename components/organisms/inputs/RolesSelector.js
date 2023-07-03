/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  InputLabel,
  Select,
  Box,
  Chip,
  OutlinedInput,
  MenuItem,
  FormControl,
  useTheme,
} from "@mui/material";
import { useState } from "react";

const availableRoles = [
  "Oliver ",
  "Van ",
  "April ",
  "Ralph ",
  "Omar ",
  "Carlos ",
  "Miriam ",
  "Bradley ",
  "Virginia ",
  "Kelly ",
];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const RolesSelect = ({ multi, label }) => {
  /// TODO -> this should take address of the DAO and then fetch roles onchain
  const theme = useTheme();

  const [roles, selectRoles] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    selectRoles(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <FormControl size="small" fullWidth sx={{}}>
      <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={roles}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label={label} />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip size="small" key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {availableRoles.map((name) => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, roles, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default RolesSelect;
