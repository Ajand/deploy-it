/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, TextField } from "@mui/material";
import { PaddedContainer, FormRow, SelectDAOCategories } from "../../atoms";
import { AvatarSelector, CoverSelector } from "../../molecules";
import { useImageUpload } from "../../../data/hooks";
import { useState, useEffect } from "react";

const CreateDAOProfileInfo = ({ daoInfo, setDaoInfo, avatar, cover }) => {
  const daoName = daoInfo.name;
  const setDaoName = setDaoInfo("name");

  const daoDescription = daoInfo.description;
  const setDaoDescription = setDaoInfo("description");

  const categories = daoInfo.categories;
  const setCategories = setDaoInfo("categories");

  useEffect(() => {
    if (!daoInfo.avatar && avatar) {
      setDaoInfo("avatar")(avatar);
    }
  }, [avatar]);

  console.log(daoInfo, avatar);

  return (
    <PaddedContainer>
      <FormRow>
        <AvatarSelector avatar={avatar} />
      </FormRow>
      <FormRow>
        <CoverSelector cover={cover} />
      </FormRow>
      <FormRow>
        <TextField
          label="DAO Name"
          variant="outlined"
          color="simple"
          fullWidth
          size="small"
          name="dao-name"
          value={daoName}
          onChange={(e) => setDaoName(e.target.value)}
        />
      </FormRow>
      <FormRow>
        <SelectDAOCategories value={categories} setValue={setCategories} />
      </FormRow>
      <FormRow>
        <TextField
          label="Description"
          multiline
          variant="outlined"
          color="simple"
          fullWidth
          size="small"
          name="dao-description"
          value={daoDescription}
          onChange={(e) => setDaoDescription(e.target.value)}
        />
      </FormRow>
    </PaddedContainer>
  );
};

export default CreateDAOProfileInfo;
