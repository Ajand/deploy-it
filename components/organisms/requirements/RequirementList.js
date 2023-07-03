/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar } from "@mui/material";

import RequirementItem from "./RequirementItem";

const RequirementList = ({ items, noAction }) => {
  return (
    <div>
      {items.map((requirement, i) => (
        <RequirementItem
          key={`${JSON.stringify(requirement)}-${i}`}
          item={requirement}
          divider={i !== items.length - 1}
          noAction={noAction}
        />
      ))}
    </div>
  );
};

export default RequirementList;
