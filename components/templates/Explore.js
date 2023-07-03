/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container } from "@mui/material";
import { Header, Explorer } from "../organisms";
import { Footer } from "../molecules";

const Explore = ({ daos, loading }) => {
  return (
    <div>
      <Header />
      <Container
        css={css`
          padding-top: 4em;
        `}
      >
        <Explorer daos={daos} loading={loading} />
      </Container>
      <Footer />
    </div>
  );
};

export default Explore;
