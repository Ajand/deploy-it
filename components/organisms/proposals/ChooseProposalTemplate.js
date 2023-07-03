/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Grid } from "@mui/material";
import { TemplateItem } from "../../molecules";
import { PaddedContainer } from "../../atoms";

const ChooseProposalTemplate = ({ proposalInfo, setProposalInfo }) => {
  const templates = [
    {
      name: "general",
      label: "General",
      description: `Lorem Ipsum is simply dummy text of the printing and   passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `,
    },
    {
      name: "send-tokens",
      label: "Send Tokens",
      description: `Lorem Ipsum is simply dummy text of the printing and   passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `,
    },
  ];

  return (
    <PaddedContainer>
      <Grid container spacing={2}>
        {templates.map((template) => (
          <Grid item sm={6} key={template.name}>
            <TemplateItem
              template={template}
              selected={proposalInfo.template == template.name}
              onSelect={() => setProposalInfo("template")(template.name)}
            />
          </Grid>
        ))}
      </Grid>
    </PaddedContainer>
  );
};
export default ChooseProposalTemplate;
