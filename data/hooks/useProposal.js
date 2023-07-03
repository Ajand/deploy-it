import { useState, useEffect } from "react";

import useRoles from "./useRoles";

import { createRandomProposal } from "../fakes/daos";

const useProposals = (daoAddress, proposalId) => {
  const roles = useRoles();
  const [proposal, setProposal] = useState("");
  const [loading, setLoading] = useState(true);

  console.log(roles);

  useEffect(() => {
    const main = async () => {
      setProposal(createRandomProposal());
      setLoading(false);
    };

    main();
  }, []);

  return {
    data: proposal,
    loading,
  };
};

export default useProposals;
