/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SupervisorAccount, Fingerprint, Preview } from "@mui/icons-material";
import { Stepper, StepperHeader, StepperAction } from "../../molecules";
import { useState } from "react";
import { CreateDAOProfileInfo, CreateDAOAdmins, CreateDAOPreview } from "..";
import { Grid, Paper } from "@mui/material";
import { useImageUpload, useStepper } from "../../../data/hooks";

const CreateDAOStepper = () => {
  const [daoInfo, sdInfo] = useState({
    ups: new Set([]),
    categories: [],
  });
  const avatar = useImageUpload();
  const cover = useImageUpload();

  const setDaoInfo = (key) => (value) => {
    const nDaoInfo = { ...daoInfo };
    nDaoInfo[key] = value;
    sdInfo(nDaoInfo);
  };

  const steps = [
    {
      label: "Profile",
      icon: <Fingerprint />,
      content: (
        <CreateDAOProfileInfo
          daoInfo={daoInfo}
          setDaoInfo={setDaoInfo}
          avatar={avatar}
          cover={cover}
        />
      ),
    },
    {
      label: "Admins",
      icon: <SupervisorAccount />,
      content: <CreateDAOAdmins daoInfo={daoInfo} setDaoInfo={setDaoInfo} />,
    },
    {
      label: "Finalization",
      icon: <Preview />,
      content: (
        <CreateDAOPreview daoInfo={daoInfo} avatar={avatar} cover={cover} />
      ),
    },
  ];

  const { step, nextEnabled, backEnabled, next, back, renderStep, isLastStep } =
    useStepper({
      steps,
    });

  const create = () => {};

  return (
    <div>
      <Paper
        css={css`
          max-width: 900px;
          width: 95%;
        `}
      >
        <Grid container>
          <Grid item md={12}>
            <StepperHeader title="Create a DAO" />
          </Grid>
          <Grid item md={3}>
            <div
              css={(theme) => css`
                padding: 2em;
                border-right: 1px solid ${theme.palette.divider};
                height: 100%;
              `}
            >
              <Stepper steps={steps} active={step} />
            </div>
          </Grid>
          <Grid item md={9}>
            {renderStep()}
            <StepperAction
              nextEnabled={nextEnabled}
              backEnabled={backEnabled}
              next={next}
              back={back}
              isFinish={isLastStep}
              onFinish={create}
              finalTitle="Create"
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default CreateDAOStepper;
