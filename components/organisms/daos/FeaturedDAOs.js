/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Divider, Typography, Button, Grid } from "@mui/material";
import { DAOCard } from "../../molecules";
import { useRouter } from "next/router";

const FeaturedDAOs = ({ daos, loading }) => {
  const router = useRouter();

  if (loading) return <div>Loading ...</div>;
  return (
    <div>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5em;
        `}
      >
        <Typography variant="h6">Featured DAOs</Typography>
        <Button onClick={() => router.push("/explore")}>Explore More</Button>
      </div>
      <Divider />
      <Grid container spacing={2}>
        {daos.map((dao) => (
          <Grid
            css={css`
              margin-top: 1em;
            `}
            key={dao.id}
            item
            md={4}
          >
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
export default FeaturedDAOs;
