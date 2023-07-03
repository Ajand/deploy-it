/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container } from "@mui/material";
import { Header, Hero, FeaturedDAOs } from "../organisms";
import { Footer } from "../molecules";

const Home = ({ featuredDAOs, loading }) => {
  return (
    <div>
      <Header />
      <Container
        css={css`
          padding-top: 4em;
          padding-bottom: 2em;
        `}
      >
        <Hero />
        <div
          css={css`
            margin-top: 4em;
          `}
        ></div>
        <FeaturedDAOs daos={featuredDAOs} loading={loading} />
      </Container>
    </div>
  );
};

export default Home;
