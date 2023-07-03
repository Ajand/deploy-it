/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  ButtonBase,
  Typography,
  Avatar,
  CircularProgress,
  Skeleton,
} from "@mui/material";
import { useUP } from "../../../data/hooks";
import { ipfsUrlToNormal } from "../../../data/lib";

const SmallUp = ({ address }) => {
  const up = useUP(address);

  if (up.loading) {
    return (
      <div
        css={css`
          display: flex;
        `}
      >
        <Skeleton
          css={css`
            margin-right: 0.25em;
          `}
          variant="circular"
          width={30}
          height={30}
        />
        <Skeleton variant="rounded" width={90} height={30} />
      </div>
    );
  }

  if (up.profileData) {
    return (
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <Avatar
          css={(theme) => css`
            margin-right: 0.25em;
            height: 30px;
            width: 30px;
            border: 2px solid ${theme.palette.secondary.main};
          `}
          src={ipfsUrlToNormal(up.profileData.profileImage[0].url)}
          width={30}
          height={30}
        />
        <Typography
          css={(theme) =>
            css`
              color: ${theme.palette.secondary.main};
            `
          }
          variant="subtitle2"
        >
          {up.profileData.name}
        </Typography>
      </div>
    );
  }
};
export default SmallUp;
