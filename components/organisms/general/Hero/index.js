/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container, Typography, useTheme, Button, Grid } from "@mui/material";
import { useRouter } from "next/router";

const Hero = () => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <div>
      <Grid container>
        <Grid item md={8}>
          <Typography variant="h2">
            Create, propose & vote within the{" "}
            <span
              css={css`
                color: ${theme.palette.pink.main};
              `}
            >
              LUKSO
            </span>{" "}
            ecosystem
          </Typography>
        </Grid>
      </Grid>

      <div
        css={css`
          margin-top: 2em;
        `}
      >
        <Button
          onClick={() => router.push("/daos/create")}
          variant="contained"
          color="primary"
        >
          Start A DAO
        </Button>
        <Button
          css={css`
            margin-left: 1em;
          `}
          variant="contained"
          color="secondary"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Hero;
