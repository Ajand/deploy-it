/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Tabs, Tab, AppBar, Box } from "@mui/material";

const ProposalTabs = ({ tabs, selectedTab, setSelectedTab }) => {
  return (
    <Box sx={{ bgcolor: "background.primary" }}>
      <AppBar
        css={css`
          border-radius: 0px;
        `}
        position="static"
        color="secondary"
      >
        <Tabs value={selectedTab} onChange={(e, v) => setSelectedTab(v)}>
          {tabs.map((tab, i) => (
            <Tab label={tab} key={i} />
          ))}
        </Tabs>
      </AppBar>
    </Box>
  );
};
export default ProposalTabs;
