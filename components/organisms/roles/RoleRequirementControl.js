import { useRoles } from "../../../data/hooks";
import { RequirementControl } from "..";

const RoleRequirementControl = () => {
  const roles = useRoles();

  const requirements = roles[1]
    ? roles[1].requirements
    : { items: [], relations: "" };

  return (
    <div>
      <RequirementControl
        label="Role Requirement Control"
        requirements={requirements}
      />
    </div>
  );
};

export default RoleRequirementControl;
