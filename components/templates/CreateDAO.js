/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Grid, Paper } from "@mui/material";
import { Header, CreateDAOStepper } from "../organisms";
import { Footer } from "../molecules";
import { MiddleContainer } from "../atoms";

const CreateDAO = () => {
  return (
    <div>
      <Header />
      <MiddleContainer>
        <CreateDAOStepper />
      </MiddleContainer>
      <Footer />
    </div>
  );
};

export default CreateDAO;
