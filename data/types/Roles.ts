export type RolePermission = "create-proposal" | "create-role";

export interface Role {
  name: String;
  description: String;
  requirements: {
    items: RoleRequirementItem[];
    relation: String;
  };
  permissions: RolePermission[];
}

export interface TokenBasedRequirement {
  variant: "token";
  payload: {
    variant: "lsp7" | "lsp8";
    tokenAddress: String;
    tokenAmount?: Number;
  };
}

export interface WhitelistBasedRequirement {
  variant: "whitelist";
  payload: {
    addresses: String[];
  };
}

export interface RoleBasedRequirement {
  variant: "roles";
  payload: {
    roles: String[];
  };
}

export interface ActivityBasedRequirement {
  variant: "activity";
  payload: {
    daoAddress: String;
    variant: "time" | "vote" | "proposal" | "roles";
    amount?: Number;
    beforeDate?: Date;
    roles?: String[];
  };
}

export type RoleRequirementItem =
  | TokenBasedRequirement
  | WhitelistBasedRequirement
  | ActivityBasedRequirement
  | RoleBasedRequirement;
