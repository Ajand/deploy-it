/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { DAOLayout, Header, CreateProposalStepper } from "../organisms";
import { Footer } from "../molecules";

const CreateProposal = () => {
  return (
    <div>
      <Header />
      <DAOLayout sideHeader>
        <CreateProposalStepper />
      </DAOLayout>
      <Footer />
    </div>
  );
};

export default CreateProposal;
