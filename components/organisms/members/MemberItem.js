/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Chip } from "@mui/material";
import { UPItem } from "..";
import { useRouter } from "next/router";

const MemberItem = ({ member }) => {
  const router = useRouter();

  return (
    <div onClick={() => router.push(`/user/${member.address}`)}>
      <UPItem address={member.address} />
      <div
        css={css`
          padding: 0em 1em 0.75em;
        `}
      >
        {member.roles.map((role, i) => (
          <Chip
            size="small"
            variant="outlined"
            label={role}
            key={`${role}-${i}`}
            css={css`
              margin-right: 0.25em;
              margin-bottom: 0.25em;
            `}
          />
        ))}
      </div>
    </div>
  );
};
export default MemberItem;
