/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar } from "@mui/material";
import { Close } from "@mui/icons-material";
import { UPList } from "..";

const WhitelistRequirementDisplay = ({ data }) => {
  const { addresses } = data;

  return (
    <div>
      <UPList ups={addresses} short />
    </div>
  );
};
export default WhitelistRequirementDisplay;
