import { useState, useEffect } from "react";

import useRoles from "./useRoles";
import { DAOs } from "../fakes/daos";

const useProposals = (daoAddress) => {
  const roles = useRoles();
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(daoAddress);

  useEffect(() => {
    const main = async () => {
      setProposals(
        DAOs.find((dao) => dao.address === daoAddress)
          ? DAOs.find((dao) => dao.address === daoAddress).proposals
          : []
      );
      setLoading(false);
    };

    main();
  }, []);

  return {
    proposals,
    loading,
  };
};

export default useProposals;
