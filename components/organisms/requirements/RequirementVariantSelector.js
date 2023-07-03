/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  ButtonBase,
  Typography,
  Avatar,
  Divider,
  List,
  Button,
} from "@mui/material";
import { useState } from "react";
import TokenRequirement from "./TokenRequirement";
import AddressWhitelist from "./AddressWhitelistRequirement";
import OtherRoleRequirement from "./OtherRoleRequirement";
import DAOActivityRequirement from "./DAOActivitiesRequirement";

const RequirementVariantSelector = () => {
  const [variant, setVariant] = useState("");

  const variants = [
    {
      label: "Token Based",
      content: TokenRequirement,
    },
    {
      label: "Address Whitelist",
      content: AddressWhitelist,
    },
    {
      label: "Other Roles",
      content: OtherRoleRequirement,
    },
    {
      label: "DAO Activities",
      content: DAOActivityRequirement,
    },
  ];

  {
    /* TODO: Refactor this and make it nicer */
  }
  if (variant)
    return (
      <div>
        <variant.content onBack={() => setVariant("")} />
      </div>
    );

  return (
    <div>
      <div
        css={css`
          padding: 1em;
        `}
      >
        <Typography variant="h6">Select Requirement Variant</Typography>
      </div>
      <Divider />
      <div
        css={css`
          padding: 1em;
        `}
      >
        {variants.map((variant) => (
          <div
            css={css`
              margin-bottom: 0.5em;
            `}
            key={variant.label}
          >
            <Button
              onClick={() => setVariant(variant)}
              fullWidth
              variant="outlined"
            >
              {variant.label}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequirementVariantSelector;
