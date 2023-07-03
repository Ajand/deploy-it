import { useState, useEffect } from "react";
import { DAOs } from "../fakes/daos";

const useDAO = (daoId) => {
  const [dao, setDAO] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setDAO(DAOs.find((dao) => dao.address == daoId));
    setLoading(false);
  }, [daoId]);

  return {
    data: dao,
    loading,
  };
};

export default useDAO;
