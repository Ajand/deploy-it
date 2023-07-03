import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { DAOCategories } from "../../../data/lib";

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

const SelectDAOCategories = ({ value, setValue }) => {
  const handleChange = (event) => {
    const {
      target: { value: val },
    } = event;
    setValue(
      // On autofill we get a stringified value.
      typeof val === "string" ? val.split(",") : val
    );
  };

  return (
    <div>
      <FormControl fullWidth size="small" color="simple">
        <InputLabel id="demo-multiple-name-label">Categories</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={value}
          onChange={handleChange}
          input={<OutlinedInput label="Categories" />}
        >
          {DAOCategories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectDAOCategories;
