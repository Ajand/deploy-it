/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { DAOLayout, Header, CreateVaultForm } from "../organisms";
import { Footer } from "../molecules";

const CreateVault = () => {
  return (
    <div>
      <Header />
      <DAOLayout sideHeader>
        <CreateVaultForm />
      </DAOLayout>
      <Footer />
    </div>
  );
};

export default CreateVault;
