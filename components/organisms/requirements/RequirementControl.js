/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Typography, Button, Divider } from "@mui/material";
import RequirementDialog from "./RequirementDialog";
import { useRoles } from "../../../data/hooks";
import { RequirementRelationControl } from "../../molecules";
import { RequirementList } from "..";

const RequirementControl = ({
  requirements,
  onRequirementChange,
  label,
  noAction,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  //const [relationString, setRelationString] = useState("");

  const roles = useRoles();

  return (
    <div>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <Typography variant="body1">{label}</Typography>
        {!noAction && (
          <Button onClick={() => setIsDialogOpen(true)} size="small">
            + Add
          </Button>
        )}
      </div>
      <RequirementDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
      <div
        css={css`
          margin-top: 0.5em;
        `}
      >
        <RequirementList items={requirements.items} noAction={noAction} />
      </div>
      <Divider />
      <div
        css={css`
          margin-top: 1em;
        `}
      >
        <RequirementRelationControl noAction={noAction} />
      </div>
    </div>
  );
};

export default RequirementControl;
