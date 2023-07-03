/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { DAOLayout, Header, Proposal } from "../organisms";
import { Footer } from "../molecules";

const ProposalDetails = () => {
  return (
    <div>
      <Header />
      <DAOLayout smallTop>
        <Proposal />
      </DAOLayout>
      <Footer />
    </div>
  );
};

export default ProposalDetails;
