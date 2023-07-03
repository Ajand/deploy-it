/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { DAOLayout, Header, CreateRoleForm } from "../organisms";
import { Footer } from "../molecules";

const Role = () => {
  return (
    <div>
      <Header />
      <DAOLayout sideHeader>
        <CreateRoleForm />
      </DAOLayout>
      <Footer />
    </div>
  );
};

export default Role;
