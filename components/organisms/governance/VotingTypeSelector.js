/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar } from "@mui/material";
import { DescriptedRadio } from "../../molecules";
import { useState } from "react";

const variants = [
  {
    value: "basic",
    label: "Basic Voting",
    description: "All users voting power will be the same",
  },
  {
    value: "token",
    label: "Token Based Voting",

    description: "Users will get 1 voting power for each token",
  },
  {
    value: "quadratic",
    label: "Quadratic Voting",
    description:
      "Users will get more voting power with tokens, but multi user have more voting power than a single user with the same amount of tokens.",
  },
];

const VotingTypeSelector = () => {
  const [selected, setSelected] = useState(variants[0].value);

  return (
    <div>
      <Typography
        css={css`
          margin-bottom: 0.5em;
        `}
        variant="h6"
      >
        Voting Type
      </Typography>
      {variants.map((vari, i) => (
        <DescriptedRadio
          key={i}
          label={vari.label}
          description={vari.description}
          onClick={() => setSelected(vari.value)}
          selected={selected === vari.value}
        />
      ))}
    </div>
  );
};

export default VotingTypeSelector;
