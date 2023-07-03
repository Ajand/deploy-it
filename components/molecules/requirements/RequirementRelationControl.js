/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";

const RequirementRelationControl = ({ noAction }) => {
  return (
    <div>
      <FormControl disabled={noAction} fullWidth size="small">
        <InputLabel id="requirement-relation-select-label">
          Requirements Relation
        </InputLabel>
        <Select
          labelId="requirement-relation-select-label"
          id="requirement-relation-select"
          value={"and"}
          label="RequirementRelation"
        >
          <MenuItem value={"and"}>And</MenuItem>
          <MenuItem value={"or"}>Or</MenuItem>
          <MenuItem value={"custorm"} disabled>
            Custom - Coming Soon
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default RequirementRelationControl;
