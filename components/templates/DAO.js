/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { DAOLayout, Header, ProposalsList } from "../organisms";
import { Footer } from "../molecules";

const DAO = () => {
  return (
    <div>
      <Header />
      <DAOLayout>
        <ProposalsList />
      </DAOLayout>
      <Footer />
    </div>
  );
};

export default DAO;
