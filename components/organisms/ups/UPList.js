/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { List } from "@mui/material";
import UPItem from "./UPItem";

const UPList = ({ ups, action, short }) => {
  return (
    <List>
      {ups.map((up, i) => (
        <UPItem
          address={up.toLowerCase()}
          key={i}
          short={short}
          action={action}
        />
      ))}
    </List>
  );
};

export default UPList;
