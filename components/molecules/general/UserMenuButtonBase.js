/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";
import { ipfsUrlToNormal, formatAddress } from "../../../data/lib";

const UserMenuButtonBase = ({ upData, upAddress, onClick = () => {} }) => {
  return (
    <>
      <ButtonBase
        css={(theme) => css`
          padding: 0.4em;
          border-radius: 4em;
          background: ${theme.palette.primary.main};
        `}
        onClick={onClick}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          {upData?.profileImage.length ? (
            <Avatar
              css={css`
                height: 30px;
                width: 30px;
                border: 2px solid #f8f8f8;
              `}
              src={ipfsUrlToNormal(upData.profileImage[0].url)}
            />
          ) : null}

          <Typography
            css={css`
              margin-right: 0.5em;
              font-size: 1.2em;
              margin-left: 0.5em;
            `}
            variant="h6"
          >
            {upData?.name ? upData.name : formatAddress(upAddress)}
          </Typography>
          <ArrowDownward
            css={css`
              margin-right: 0.25em;
              width: 17px;
              height: 17px;
            `}
          />
        </div>
      </ButtonBase>
    </>
  );
};

export default UserMenuButtonBase;
