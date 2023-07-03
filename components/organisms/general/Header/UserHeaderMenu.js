/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import { Settings, People, Logout, AccountCircle } from "@mui/icons-material";
import { ipfsUrlToNormal } from "../../../../data/lib";

const UserHeaderMenu = ({ anchorEl, handleClose, upData }) => {
  const theme = useTheme();

  return (
    <Menu
      css={css`
        margin-top: 0.25em;
      `}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      sx={{
        "& .MuiPaper-root": {
          background: theme.palette.primary.paper,
        },
      }}
    >
      <MenuItem sx={{ width: 240, maxWidth: "100%" }}>
        <ListItemIcon>
          {upData?.profileImage.length ? (
            <Avatar
              css={(theme) => css`
                width: 26px;
                height: 26px;
                border: 2px solid #f8f8f8;
              `}
              src={ipfsUrlToNormal(upData.profileImage[0].url)}
            />
          ) : (
            <AccountCircle />
          )}
        </ListItemIcon>
        <ListItemText>Profile</ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem sx={{ width: 240, maxWidth: "100%" }}>
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText>My DAOs</ListItemText>
      </MenuItem>
      <Divider />

      <MenuItem sx={{ width: 240, maxWidth: "100%" }}>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>

        <ListItemText>Settings</ListItemText>
      </MenuItem>

      <MenuItem sx={{ width: 240, maxWidth: "100%" }}>
        <ListItemIcon>
          <Logout />
        </ListItemIcon>
        <ListItemText>Logout</ListItemText>
      </MenuItem>
    </Menu>
  );
};

export default UserHeaderMenu;
