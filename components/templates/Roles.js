/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { DAOLayout, Header, RolesList } from "../organisms";
import { Footer } from "../molecules";

const Roles = () => {
  return (
    <div>
      <Header />
      <DAOLayout>
        <RolesList />
      </DAOLayout>
      <Footer />
    </div>
  );
};
export default Roles;
