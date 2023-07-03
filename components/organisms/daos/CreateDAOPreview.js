/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar, Chip, Grid } from "@mui/material";
import { PaddedContainer } from "../../atoms";
import { UPList } from "../";

const CreateDAOPreview = ({ daoInfo, avatar, cover }) => {
  return (
    <PaddedContainer>
      <div
        css={css`
          position: relative;
        `}
      >
        <img
          css={css`
            width: 100%;
            height: 200px;
            border-radius: 1em;
            object-fit: cover;
          `}
          src={cover.imageUrl}
        />
        <Avatar
          src={avatar.imageUrl}
          css={(theme) => css`
            width: 120px;
            height: 120px;
            position: absolute;
            bottom: -25px;
            left: calc(50% - 60px);
            border: 3px solid ${theme.palette.background.paper};
          `}
        />
      </div>
      <div
        css={css`
          margin-top: 1em;
        `}
      >
        <Typography variant="h6">{daoInfo.name}</Typography>
        <div
          css={css`
            margin-top: 0.25em;
          `}
        >
          {daoInfo.categories.map((category) => (
            <Chip
              css={css`
                margin-right: 0.5em;
              `}
              label={category}
              key={category}
              size="small"
            />
          ))}
        </div>
        <Grid
          css={css`
            margin-top: 0em;
          `}
          container
          spacing={3}
        >
          <Grid item sm={7}>
            <Typography
              css={css`
                font-weight: 600;
              `}
              variant="body1"
            >
              Description:
            </Typography>
            <Typography variant="body2">{daoInfo.description}</Typography>
          </Grid>
          <Grid item sm={5}>
            <Typography
              css={css`
                font-weight: 600;
              `}
              variant="body1"
            >
              Admins:
            </Typography>
            <UPList ups={[...daoInfo.ups]} short />
          </Grid>
        </Grid>
      </div>
    </PaddedContainer>
  );
};

export default CreateDAOPreview;
