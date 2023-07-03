import { faker } from "@faker-js/faker";
import sha256 from "crypto-js/sha256";
import {
  Role,
  TokenBasedRequirement,
  WhitelistBasedRequirement,
  RoleBasedRequirement,
  ActivityBasedRequirement,
  RoleRequirementItem,
  RolePermission,
} from "../types";

function generateRandomPermissions(): RolePermission[] {
  const numPermissions = faker.number.int({ min: 0, max: 2 });

  if (numPermissions == 0) return [];
  if (numPermissions == 1) {
    const permission = faker.helpers.arrayElement([
      "create-proposal",
      "create-role",
    ]);
    //@ts-ignore
    return [permission];
  }
  return ["create-proposal", "create-role"];
}

function generateRandomRequirementItems(
  availableRoleNames: string[]
): RoleRequirementItem[] {
  const items: RoleRequirementItem[] = [];

  // Randomly choose the number of requirement items (between 1 and 5)
  const numItems = faker.number.int({ min: 1, max: 6 });

  // Ensure at least one requirement type is present
  const availableRequirementTypes: RoleRequirementItem[] = [
    {
      variant: "token",
      payload: {
        variant: "lsp7",
        tokenAddress: faker.finance.ethereumAddress(),
        tokenAmount: faker.number.int({ min: 1, max: 100000000 }),
      },
    },
    {
      variant: "token",
      payload: {
        variant: "lsp8",
        tokenAddress: faker.finance.ethereumAddress(),
      },
    },
    {
      variant: "whitelist",
      payload: {
        addresses: Array(faker.number.int({ min: 1, max: 30 }))
          .fill(0)
          .map(() => faker.finance.ethereumAddress()),
      },
    },
    {
      variant: "roles",
      payload: {
        roles: Array(faker.number.int({ min: 1, max: 5 }))
          .fill(0)
          .map(
            () =>
              availableRoleNames[
                faker.number.int({ min: 0, max: availableRoleNames.length - 1 })
              ]
          ),
      },
    },
    {
      variant: "activity",
      payload: {
        daoAddress: faker.finance.ethereumAddress(),
        variant: "time",
        beforeDate: faker.date.past(),
      },
    },
    {
      variant: "activity",
      payload: {
        daoAddress: faker.finance.ethereumAddress(),
        variant: "vote",
        amount: faker.number.int({ min: 1, max: 10000000 }),
      },
    },
    {
      variant: "activity",
      payload: {
        daoAddress: faker.finance.ethereumAddress(),
        variant: "proposal",
        amount: faker.number.int({ min: 1, max: 30 }),
      },
    },
    {
      variant: "activity",
      payload: {
        daoAddress: faker.finance.ethereumAddress(),
        variant: "roles",
        roles: Array(faker.number.int({ min: 1, max: 5 }))
          .fill(0)
          .map(
            () =>
              availableRoleNames[
                faker.number.int({ min: 0, max: availableRoleNames.length - 1 })
              ]
          ),
      },
    },
  ];

  const randomRequirementType = faker.helpers.arrayElement(
    availableRequirementTypes
  );

  items.push(randomRequirementType);

  // Generate remaining requirement items
  for (let i = 1; i < numItems; i++) {
    const requirementType = faker.helpers.arrayElement(
      availableRequirementTypes.filter(
        (item) =>
          sha256(JSON.stringify(item)) !==
          sha256(JSON.stringify(randomRequirementType))
      )
    );
    items.push(requirementType);
  }

  return items;
}

export function generateRandomRole(): Role {
  const randomPermission = generateRandomPermissions();

  const availableRoleNames = Array(faker.number.int({ min: 1, max: 30 }))
    .fill(0)
    .map((item) => faker.person.jobType());

  const role: Role = {
    name: faker.person.jobType(),
    description: faker.lorem.paragraph(),
    requirements: {
      items: generateRandomRequirementItems(availableRoleNames),
      relation: faker.helpers.arrayElement(["AND", "OR"]),
    },
    permissions: randomPermission,
  };

  return role;
}
