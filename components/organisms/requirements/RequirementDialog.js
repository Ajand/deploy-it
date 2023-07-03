import { Dialog } from "@mui/material";

import RequirementVariantSelector from "./RequirementVariantSelector";

const RequirementDialog = (props) => {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <RequirementVariantSelector />
    </Dialog>
  );
};

export default RequirementDialog;
