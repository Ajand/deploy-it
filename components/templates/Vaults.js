/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { DAOLayout, Header, VaultsList } from "../organisms";
import { Footer } from "../molecules";

const Vaults = () => {
  return (
    <div>
      <Header />
      <DAOLayout>
        <VaultsList />
      </DAOLayout>
      <Footer />
    </div>
  );
};
export default Vaults;
