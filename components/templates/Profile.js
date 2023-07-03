/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container } from "@mui/material";
import { Header, Explorer } from "../organisms";
import { ProfileHeader, ProfileTabs, Footer } from "../molecules";
import { useState } from "react";

const tabs = ["DAOs", "Activities"];

const Profile = ({ user, loading }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  if (!user || loading) return <div>Loading ...</div>;

  return (
    <div>
      <Header />
      <Container
        css={css`
          padding-top: 4em;
        `}
      >
        <ProfileHeader user={user} />
        <ProfileTabs
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <div
          css={css`
            margin-top: 0.5em;
          `}
        ></div>
        <Explorer daos={user.daos} />
      </Container>
      <Footer />
    </div>
  );
};

export default Profile;
