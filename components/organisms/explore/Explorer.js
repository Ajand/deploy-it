/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Divider, Typography, Button, Grid } from "@mui/material";
import { DAOCard } from "../../molecules";
import { useRouter } from "next/router";

const Explorer = ({ daos, loading }) => {
  const router = useRouter();
  if (loading) return <div>Loading ...</div>;
  return (
    <div>
      <Grid container spacing={2}>
        {daos.map((dao) => (
          <Grid key={dao.id} item md={4}>
            <DAOCard
              onClick={() => router.push(`/daos/${dao.address}`)}
              dao={dao}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Explorer;
