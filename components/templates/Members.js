/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { DAOLayout, Header, MembersList } from "../organisms";

const Members = () => {
  return (
    <div>
      <Header />
      <DAOLayout>
        <MembersList />
      </DAOLayout>
    </div>
  );
};

export default Members;
