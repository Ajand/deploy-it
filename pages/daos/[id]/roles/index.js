/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { Roles } from "../../../../components/templates";
import { useRouter } from "next/router";
import { useDAO } from "../../../../data/hooks";

const RolesPage = () => {
  const router = useRouter();
  const daoInfo = useDAO(router.query.id);

  console.log(daoInfo);

  return (
    <div>
      <Roles daoInfo={daoInfo} />
    </div>
  );
};

export default RolesPage;
