/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  MenuList,
  MenuItem,
  ListItemText,
  Paper,
  ListItemIcon,
} from "@mui/material";
import {
  Description,
  AccountBalance,
  Gavel,
  Groups,
  MilitaryTech,
  Info,
} from "@mui/icons-material";
import { useRouter } from "next/router";

const DAOMenu = () => {
  const menu = [
    {
      label: "Proposals",
      icon: Description,
      route: "/",
    },
    {
      label: "Vaults",
      icon: AccountBalance,
      route: "vaults",
    },
    {
      label: "Governance",
      icon: Gavel,
      route: "governance",
    },
    {
      label: "Roles",
      icon: MilitaryTech,
      route: "roles",
    },
    {
      label: "Members",
      icon: Groups,
      route: "members",
    },
    /*{
      label: "About",
      icon: Info,
      route: "about",
    },*/
  ];

  const router = useRouter();

  const daoRoute = `/daos/${router.query.id}`;

  console.log(router.query);

  const isRouteActive = (routeName) => {
    if (routeName === "/") {
      return false;
    }
    if (router.route.includes(routeName)) {
      return true;
    }
  };

  {
    /*TODO needs to refactor this into more cleaner code */
  }
  return (
    <Paper sx={{ width: 320, maxWidth: "100%" }}>
      <MenuList>
        {menu.map((item) => (
          <MenuItem
            css={(theme) => css`
              color: ${isRouteActive(item.route)
                ? theme.palette.primary.light
                : null};
            `}
            onClick={() => {
              router.push(`${daoRoute}/${item.route}`);
            }}
            key={item.route}
          >
            <ListItemIcon
              css={(theme) => css`
                color: ${isRouteActive(item.route)
                  ? theme.palette.primary.light
                  : null};
              `}
            >
              <item.icon fontSize="small" />
            </ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
};

export default DAOMenu;
