/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import RolesSelect from "../inputs/RolesSelector";

const DAORoles = () => {
  return (
    <div
      css={css`
        margin-top: 0.5em;
      `}
    >
      <RolesSelect multi label="Roles in the desired DAO" />
    </div>
  );
};

export default DAORoles;
