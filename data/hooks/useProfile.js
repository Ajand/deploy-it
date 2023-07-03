import { useState, useEffect } from "react";
import { createRandomUser } from "../fakes/daos";

const useProfile = (address) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser(createRandomUser(address));
    setLoading(false);
  }, [address]);

  return {
    data: user,
    loading,
  };
};

export default useProfile;
