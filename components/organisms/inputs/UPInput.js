/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { TextField } from "@mui/material";
import { ethers } from "ethers";
import { DataContext } from "../../../data/contexts";
import { useEffect, useState, useContext } from "react";
import { UPResolver } from "../../molecules";

const UPInput = ({ value, setValue, label }) => {
  const { getUPData } = useContext(DataContext);
  const [isProfile, setIsProfile] = useState(true);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);

  const isAddress = ethers.utils.isAddress(value.toLowerCase());
  const notAddressText = "Must be a valid address";
  const notProfileText = "This address is not a universal profile";
  const notProfileData = "Can't fetch universal profile data";

  const isError = value.length && !isAddress;

  useEffect(() => {
    setIsProfile(true);
    setProfileData(null);
    if (isAddress) {
      const main = async () => {
        try {
          setLoading(true);
          const updata = await getUPData(value);
          if (updata.name) {
            setProfileData(updata);
          }
          setLoading(false);
          //setUpData(updata);
        } catch (err) {
          setIsProfile(false);
        }
      };

      main();
    }
  }, [value]);

  const properHelperText = () => {
    if (value.length) {
      if (!isAddress) return notAddressText;
      if (!isProfile) return notProfileText;
      if (!loading && !profileData) return notProfileData;
    }
    return "";
  };

  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <TextField
        size="small"
        label={label}
        fullWidth
        name={`${label}-admin-address`}
        color="simple"
        error={isError}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        helperText={properHelperText()}
      />
      <div
        css={css`
          margin-top: 0.5em;
        `}
      >
        {profileData && <UPResolver data={profileData} />}
      </div>
    </div>
  );
};

export default UPInput;
