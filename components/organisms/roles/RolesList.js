/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Typography, Avatar } from "@mui/material";
import { useRouter } from "next/router";
import { useDAO } from "../../../data/hooks";
import { RoleCard } from "..";
import sha256 from "crypto-js/sha256";

const RolesList = () => {
  const router = useRouter();
  const daoInfo = useDAO(router.query.id);
  const daoRoute = `/daos/${router.query.id}`;

  if (daoInfo.loading || !daoInfo.data) return <div>Loading ...</div>;

  const dao = daoInfo.data;

  const { roles } = dao;

  console.log(roles);

  return (
    <div>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          margin-bottom: 1em;
        `}
      >
        <Typography variant="h5">Roles: </Typography>
        <Button
          onClick={() => router.push(`${daoRoute}/roles/create`)}
          size="small"
          variant="contained"
        >
          +Add
        </Button>
      </div>
      {roles.map((role) => (
        <div
          css={css`
            margin-bottom: 1em;
          `}
          key={sha256(JSON.stringify(role))}
        >
          <RoleCard role={role} />
        </div>
      ))}
    </div>
  );
};
export default RolesList;
