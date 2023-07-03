/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Preview,
  Fingerprint,
  Info,
  HowToVote,
  Tune,
  Ballot,
} from "@mui/icons-material";
import { Stepper, StepperHeader, StepperAction } from "../../molecules";
import { useState, useEffect } from "react";
import {
  ChooseProposalTemplate,
  ProposalInfoForm,
  WhoCanVoteControl,
  ProposalVotingParams,
  ProposalPreview,
} from "..";
import { Grid, Paper } from "@mui/material";
import { useImageUpload, useStepper, useRoles } from "../../../data/hooks";

/*
   template: {
      variant: token,
      vaultName: "Main Vault",
      tokenAddress: "0xB06c856C8eaBd1d8321b687E188204C1018BC4E5",
      tokenAmount: 10000,
      receivingAddress: "0x3904b8f5b0F49cD206b7d5AABeE5D1F37eE15D8d"
      options: [
        "Token address",
        "Token Amount",
        "Receiving Address",
        "Token address",
        "it to make a type specimen book. It has survived",
      ],
    },

*/

const CreateProposalStepper = () => {
  const roles = useRoles();

  const [proposalInfo, setPInfo] = useState({
    template: null,
    submission: true,
    basic: {
      title: "Why do we use it?",
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
      get time() {
        return new Date();
      },
      proposer: "0x1780bCf4103D3F501463AD3414c7f4b654bb7aFd",
    },
    templateInfo: {
      variant: "General",
      options: [
        "it to make a type specimen book. It has survived",
        "it to make a type specimen book. It has survived",
      ],
    },
    votersRequirements: roles[1]
      ? roles[0].requirements
      : { items: [], relations: "" },
    submissionRequirements: roles[1]
      ? roles[0].requirements
      : { items: [], relations: "" },
    votingParameters: {
      votingToken: "0x1780bCf4103D3F501463AD3414c7f4b654bb7aFd",
      votingType: "Basic",
      participationRate: "50%",
      majority: "60%",
      minimumVotingDelay: "2 days",
      minimumVotingPeriode: "10 days",
      minimumExecutionDelay: "2 days",
    },
  });

  useEffect(() => {
    setPInfo({
      ...proposalInfo,
      votersRequirements: roles[1]
        ? roles[0].requirements
        : { items: [], relations: "" },
      submissionRequirements: roles[1]
        ? roles[0].requirements
        : { items: [], relations: "" },
    });
  }, [roles]);

  const setProposalInfo = (key) => (value) => {
    const nPInfo = { ...proposalInfo };
    nPInfo[key] = value;
    setPInfo(nPInfo);
  };

  const baseSteps = [
    {
      label: "Template",
      icon: <Fingerprint />,
      requirement: () => proposalInfo.template,
      content: (
        <ChooseProposalTemplate
          proposalInfo={proposalInfo}
          setProposalInfo={setProposalInfo}
        />
      ),
    },
    {
      label: "Information",
      icon: <Info />,
      content: (
        <ProposalInfoForm
          proposalInfo={proposalInfo}
          setProposalInfo={setProposalInfo}
        />
      ),
    },
    {
      label: "Voters",
      icon: <HowToVote />,
      content: (
        <WhoCanVoteControl
          proposalInfo={proposalInfo}
          setProposalInfo={setProposalInfo}
          label="What are the requirements for voters"
        />
      ),
    },
    {
      label: "Parameters",
      icon: <Tune />,
      content: (
        <ProposalVotingParams
          proposalInfo={proposalInfo}
          setProposalInfo={setProposalInfo}
        />
      ),
    },
    {
      label: "Preview",
      icon: <Preview />,
      content: <ProposalPreview proposalInfo={proposalInfo} />,
    },
  ];

  const steps = baseSteps.reduce((pV, cV) => {
    if (cV.label === "Voters" && proposalInfo.submission) {
      return [
        ...pV,
        {
          label: "Submitters",
          icon: <Ballot />,
          content: (
            <WhoCanVoteControl
              proposalInfo={proposalInfo}
              setProposalInfo={setProposalInfo}
              label="What are the requirements for submitters"
            />
          ),
        },
        cV,
      ];
    }
    return [...pV, cV];
  }, []);

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
        `}
      >
        <Grid container>
          <Grid item md={12}>
            <StepperHeader title="Create a proposal" />
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
              create={create}
              finalTitle="Create"
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default CreateProposalStepper;
