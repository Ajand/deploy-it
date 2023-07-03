import { useState, useEffect } from "react";

import { DAOs } from "../fakes/daos";

const useDAOs = (daoId) => {
  const [daos, setDAOs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setDAOs(DAOs);
    setLoading(false);
  }, []);

  return {
    data: daos,
    loading,
  };
};

export default useDAOs;
