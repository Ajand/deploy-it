/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Tabs, Tab, AppBar, Box } from "@mui/material";

const ProfileTabs = ({ tabs, selectedTab, setSelectedTab }) => {
  return (
    <Box sx={{ bgcolor: "background.primary" }}>
      <AppBar position="static" color="secondary">
        <Tabs value={selectedTab} onChange={(e, v) => setSelectedTab(v)}>
          {tabs.map((tab, i) => (
            <Tab label={tab} key={i} />
          ))}
        </Tabs>
      </AppBar>
    </Box>
  );
};
export default ProfileTabs;
