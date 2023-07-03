/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar } from "@mui/material";
import { useUP } from "../../../data/hooks";
import { ipfsUrlToNormal, formatAddress } from "../../../data/lib";
import moment from "moment";

const ActivityRequirementDisplay = ({ data }) => {
  const { daoAddress, variant } = data;

  const { notProfileData, profileData, loading } = useUP(daoAddress);

  const formatVariant = () => {
    switch (variant) {
      case "time":
        return "Time";
      case "vote":
        return "Vote";
      case "roles":
        return "Roles";
      case "proposal":
        return "Proposals";
    }
  };

  const renderDisplay = () => {
    switch (variant) {
      case "time":
        return timeActivity();
      case "vote":
        return voteActivity();
      case "roles":
        return rolesActivity();
      case "proposal":
        return proposalActivity();
    }
  };

  const timeActivity = () => {
    return (
      <Typography variant="body2">
        Joined Before:{" "}
        <span
          css={(theme) =>
            css`
              color: ${theme.palette.secondary.main};
            `
          }
        >
          {moment(data.beforeDate).format("YYYY-MM-DD HH:mm")}
        </span>
      </Typography>
    );
  };
  const voteActivity = () => {
    return (
      <Typography variant="body2">
        Minimum Needed Votes:{" "}
        <span
          css={(theme) =>
            css`
              color: ${theme.palette.secondary.main};
            `
          }
        >
          {data.amount}
        </span>
      </Typography>
    );
  };

  // TODO: This can be more abstracted since it's kinda getting used in the RolesRequirementDisplayt;
  const rolesActivity = () => {
    return (
      <Typography variant="body2">
        Roles Needed:{" "}
        {data.roles.map((role, i) => (
          <span key={`${role}-${i}`}>
            <span
              css={(theme) =>
                css`
                  cursor: pointer;
                  color: ${theme.palette.secondary.main};
                `
              }
            >
              {role}
            </span>
            {i !== data.roles.length - 1 && ", "}
          </span>
        ))}
      </Typography>
    );
  };

  const proposalActivity = () => {
    return (
      <Typography variant="body2">
        Minimum Needed Proposals:{" "}
        <span
          css={(theme) =>
            css`
              color: ${theme.palette.secondary.main};
            `
          }
        >
          {data.amount}
        </span>
      </Typography>
    );
  };

  return (
    <div
      css={css`
        margin-top: 0.5em;
      `}
    >
      <div>
        {!loading ? (
          !profileData ? (
            <div>{notProfileData}</div>
          ) : (
            <div
              css={css`
                display: flex;
              `}
            >
              <Avatar
                css={(theme) => css`
                  border: 2px solid ${theme.palette.simple.main};
                  margin-right: 1em;
                `}
                src={ipfsUrlToNormal(profileData?.profileImage[0].url)}
              />
              <div>
                <Typography variant="body1">{profileData.name}</Typography>
                <Typography variant="body2">
                  {formatAddress(daoAddress)}
                </Typography>
              </div>
            </div>
          )
        ) : (
          <div>Loading Profile Data</div>
        )}
      </div>
      <Typography
        css={css`
          margin-top: 0.5em;
        `}
        variant="subtitle2"
      >
        Activity Type: {formatVariant()}
      </Typography>
      {renderDisplay()}
    </div>
  );
};

export default ActivityRequirementDisplay;
