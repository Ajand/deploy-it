import { useEffect, useState, useContext } from "react";
import { DataContext } from "../contexts";
import { createRandomUP } from "../fakes/daos";

const useUP = (address) => {
  const { getUPData } = useContext(DataContext);
  const [isProfile, setIsProfile] = useState(true);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);

  const notProfileText = "This address is not a universal profile";
  const notProfileData = "Can't fetch universal profile data";
  const loadingText = "Loading";

  useEffect(() => {
    setIsProfile(true);
    setProfileData(null);
    const main = async () => {
      setTimeout(async () => {
        try {
          setLoading(true);
          const updata = createRandomUP(address.toLowerCase());
          if (updata.name) {
            setProfileData(updata);
          }
          setLoading(false);
        } catch (err) {
          console.log(err);
          setIsProfile(false);
        }
      }, Math.random() * 1000);
    };

    main();
  }, [address]);

  //useEffect(() => {
  //  setIsProfile(true);
  //  setProfileData(null);
  //  const main = async () => {
  //    setTimeout(async () => {
  //      try {
  //        setLoading(true);
  //        const updata = await getUPData(address.toLowerCase());
  //        if (updata.name) {
  //          setProfileData(updata);
  //        }
  //        setLoading(false);
  //      } catch (err) {
  //        console.log(err);
  //        setIsProfile(false);
  //      }
  //    }, Math.random() * 1000);
  //  };
  //
  //  main();
  //}, [address]);

  return {
    isProfile,
    profileData,
    loading,
    notProfileText,
    notProfileData,
    loadingText,
  };
};

export default useUP;
