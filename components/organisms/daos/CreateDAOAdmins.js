/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PaddedContainer } from "../../atoms";
import { UPListManager } from "../";

const CreateDAOAdmins = ({ daoInfo, setDaoInfo }) => {
  const ups = daoInfo.ups;
  const setUps = setDaoInfo("ups");

  return (
    <PaddedContainer>
      <UPListManager
        label="Admin Universal Profile Address"
        ups={ups}
        setUps={setUps}
      />
    </PaddedContainer>
  );
};

export default CreateDAOAdmins;
