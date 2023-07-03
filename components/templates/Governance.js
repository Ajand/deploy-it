/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { DAOLayout, Header, GovernanceDetails } from "../organisms";
import { Footer } from "../molecules";

const Governance = () => {
  return (
    <div>
      <Header />
      <DAOLayout>
        <GovernanceDetails />
      </DAOLayout>
      <Footer />
    </div>
  );
};

export default Governance;
