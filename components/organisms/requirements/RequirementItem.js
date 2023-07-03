/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography, Divider, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import TokenRequirementDisplay from "./TokenRequirementDisplay";
import WhitelistRequirementDisplay from "./WhitelistRequirementDisplay";
import RolesRequirementDisplay from "./RolesRequirementDisplay";
import ActivityRequirementDisplay from "./ActivityRequirementDisplay";

const RequirementItem = ({ item, divider, noAction }) => {
  const formatVariant = () => {
    switch (item.variant) {
      case "token":
        return "Token";
      case "whitelist":
        return "Address Whitelist";
      case "roles":
        return "Other Roles";
      case "activity":
        return "DAO Activity";
    }
  };

  const renderDisplay = () => {
    switch (item.variant) {
      case "token":
        return <TokenRequirementDisplay data={item.payload} />;
      case "whitelist":
        return <WhitelistRequirementDisplay data={item.payload} />;
      case "roles":
        return <RolesRequirementDisplay data={item.payload} />;
      case "activity":
        return <ActivityRequirementDisplay data={item.payload} />;
    }
  };

  return (
    <div
      css={css`
        margin-bottom: 0.5em;
      `}
    >
      <div
        css={css`
          margin-bottom: 0.5em;
          display: flex;
          justify-content: space-between;
        `}
      >
        <div>
          <Typography variant="subtitle2">
            Requirement Variant: {formatVariant()}
          </Typography>
          {renderDisplay()}
        </div>
        <div>
          {!noAction && (
            <IconButton size="small">
              <Close
                css={(theme) => css`
                  width: 16px;
                  height: 16px;
                  color: ${theme.palette.error.main};
                `}
              />
            </IconButton>
          )}
        </div>
      </div>
      {divider && <Divider />}
    </div>
  );
};

export default RequirementItem;
