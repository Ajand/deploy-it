/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container, Grid } from "@mui/material";

const MiddleContainer = ({ children }) => {
  return (
    <Container>
      <Grid
        css={css`
          padding-bottom: 100px;
        `}
        container
      >
        <Grid item md={1}></Grid>
        <Grid item md={10}>
          <div
            css={css`
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 2em;
            `}
          >
            {children}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MiddleContainer;
