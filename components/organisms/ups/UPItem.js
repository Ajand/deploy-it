/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  ListItem,
  IconButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
import { ipfsUrlToNormal, formatAddress } from "../../../data/lib";
import { useUP } from "../../../data/hooks";

const UPItem = ({ address, action, short }) => {
  const {
    notProfileText,
    notProfileData,
    loadingText,
    isProfile,
    profileData,
    loading,
  } = useUP(address);

  const renderProperItems = () => {
    if (profileData) {
      return (
        <>
          <ListItemAvatar>
            <Avatar
              css={(theme) => css`
                border: 2px solid ${theme.palette.simple.main};
              `}
              src={ipfsUrlToNormal(profileData?.profileImage[0].url)}
            />
          </ListItemAvatar>
          <ListItemText
            primary={profileData.name}
            secondary={short ? formatAddress(address) : address}
          />
        </>
      );
    } else if (!isProfile) {
      return (
        <ListItemText
          primary={notProfileText}
          secondary={short ? formatAddress(address) : address}
        />
      );
    } else if (loading) {
      return (
        <ListItemText
          primary={loadingText}
          secondary={short ? formatAddress(address) : address}
        />
      );
    } else {
      return (
        <ListItemText
          primary={notProfileData}
          secondary={short ? formatAddress(address) : address}
        />
      );
    }
  };

  return (
    <ListItem
      dense={short}
      secondaryAction={
        action ? (
          <IconButton
            onClick={() => action.onClick(address)}
            edge="end"
            size="small"
          >
            <action.icon />
          </IconButton>
        ) : null
      }
    >
      {renderProperItems()}
    </ListItem>
  );
};

export default UPItem;
