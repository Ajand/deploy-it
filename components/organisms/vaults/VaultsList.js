/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Typography,
  Button,
  List,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import { useRouter } from "next/router";

const VaultsList = () => {
  const router = useRouter();
  const daoRoute = `/daos/${router.query.id}`;

  const vaultsList = [
    { name: "Vault 1", address: "0xf2d023e3b971Bc0B9F2deA4a5E53C64F95932696" },
    { name: "Vault 2", address: "0xf2d023e3b971Bc0B9F2deA4a5E53C64F95932696" },
    { name: "Vault 3", address: "0xf2d023e3b971Bc0B9F2deA4a5E53C64F95932696" },
    { name: "Vault 4", address: "0xf2d023e3b971Bc0B9F2deA4a5E53C64F95932696" },
  ];

  return (
    <div>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <Typography variant="h6">Vaults</Typography>
        <Button
          onClick={() => router.push(`${daoRoute}/vaults/create`)}
          size="small"
          variant="text"
          color="primary"
        >
          New Vault
        </Button>
      </div>
      <Paper
        css={css`
          margin-top: 0.5em;
        `}
      >
        <List dense component="nav" aria-label="main mailbox folders">
          {vaultsList.map((vault) => (
            <>
              <ListItemButton key={vault.name}>
                <ListItemText primary={vault.name} secondary={vault.address} />
              </ListItemButton>
            </>
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default VaultsList;
