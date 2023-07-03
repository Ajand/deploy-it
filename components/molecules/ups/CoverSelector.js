/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, ButtonBase, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const CoverSelector = ({ cover }) => {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      {cover.imageUrl ? (
        <div>
          <ButtonBase
            css={css`
              border-radius: 1em;
              width: 100%;
            `}
            variant="contained"
            component="label"
            onChange={cover.selectImage}
          >
            <img
              css={css`
                width: 100%;
                border-radius: 1em;
              `}
              src={cover.imageUrl}
            />
            <input
              onChange={cover.selectImage}
              hidden
              accept="image/*"
              multiple
              type="file"
            />
          </ButtonBase>
          <IconButton
            css={(theme) =>
              css`
                background: ${theme.palette.error.main} !important;
                position: absolute;
                bottom: -10px;
                right: 20px;
              `
            }
            size="small"
            onClick={cover.remove}
          >
            <Close />
          </IconButton>
        </div>
      ) : (
        <Button variant="outlined" color="simple" component="label">
          Choose a cover
          <input
            onChange={cover.selectImage}
            hidden
            accept="image/*"
            multiple
            type="file"
          />
        </Button>
      )}
    </div>
  );
};

export default CoverSelector;
