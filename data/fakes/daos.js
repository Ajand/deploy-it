import { faker } from "@faker-js/faker";
import { generateRandomRole } from "./Roles";

const DAO_GENERATOR_SEED = 200;

export function createRandomDAO() {
  const roles = faker.helpers.multiple(generateRandomRole, {
    count: faker.number.int({ min: 1, max: 15 }),
  });

  const proposals = faker.helpers.multiple(createRandomProposal, {
    count: faker.number.int({
      max: 30,
      min: 1,
    }),
  });

  return {
    id: faker.number.int(),
    name: faker.company.name(),
    address: faker.finance.ethereumAddress(),
    description: faker.lorem.paragraph(7),
    avatar: faker.image.urlPicsumPhotos({
      height: 200,
      width: 200,
    }),
    cover: faker.image.urlPicsumPhotos({
      height: 400,
      width: 1200,
    }),
    membersCount: faker.number.int({
      max: 10000,
    }),
    proposalsCount: proposals.length,
    roles,
    members: faker.helpers.multiple(createRandomMember(roles), {
      count: faker.number.int({ min: 60, max: 300 }),
    }),
    proposals,
  };
}

export function createRandomProposal() {
  const createRandomOption = () => {
    return faker.lorem.lines();
  };

  return {
    id: faker.number.int(),
    basic: {
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraphs({ min: 2, max: 5 }),
      get time() {
        return faker.date.recent({ days: 10 });
      },
      proposer: faker.finance.ethereumAddress(),
    },
    templateInfo: {
      variant: faker.helpers.arrayElement([
        "General",
        "Token Based",
        "Quadratic",
      ]),
      options: faker.helpers.multiple(createRandomOption, {
        count: faker.number.int({ min: 2, max: 5 }),
      }),
    },
    votersRequirements: generateRandomRole().requirements,
    submissionRequirements: generateRandomRole().requirements,
    votingParameters: {
      votingToken: faker.finance.ethereumAddress(),
      votingType: faker.helpers.arrayElement(["Basic", "Token Based"]),
      participationRate: `${faker.number.int({ min: 20, max: 80 })}%`,
      majority: `${faker.number.int({ min: 50, max: 80 })}%`,
      minimumVotingDelay: `${faker.number.int({ min: 1, max: 5 })} days`,
      minimumVotingPeriode: `${faker.number.int({ min: 1, max: 10 })} days`,
      minimumExecutionDelay: `${faker.number.int({ min: 1, max: 5 })} days`,
    },
  };
}

const createRandomMember = (daoRoles) => () => {
  return {
    address: faker.finance.ethereumAddress(),
    roles: faker.helpers.arrayElements(
      daoRoles.map((role) => role.name),
      { min: 1, max: 6 }
    ),
  };
};

export const createRandomUser = () => {
  faker.seed(DAO_GENERATOR_SEED);

  const daos = faker.helpers.multiple(createRandomDAO, {
    count: 40,
  });

  return {
    id: faker.number.int(),
    address: faker.finance.ethereumAddress(),
    name: faker.company.name(),
    description: faker.lorem.paragraph(7),
    avatar: faker.image.avatar(),
    cover: faker.image.urlPicsumPhotos({
      height: 400,
      width: 1200,
    }),
    daos: faker.helpers.arrayElements(daos, { min: 1, max: 10 }),
  };
};

export function createDAOBasedOnAddress(address) {
  return {
    id: faker.number.int(),
    name: faker.company.name(),
    address: address,
    description: faker.lorem.paragraph(7),
    avatar: faker.image.urlPicsumPhotos({
      height: 200,
      width: 200,
    }),
    cover: faker.image.urlPicsumPhotos({
      height: 400,
      width: 1200,
    }),
    membersCount: faker.number.int({
      max: 10000,
    }),
    proposalsCount: faker.number.int({
      max: 30,
      min: 1,
    }),
    roles: faker.helpers.multiple(generateRandomRole, {
      count: faker.number.int({ min: 1, max: 15 }),
    }),
  };
}

export const DAOs = (() => {
  faker.seed(DAO_GENERATOR_SEED);

  return faker.helpers.multiple(createRandomDAO, {
    count: 40,
  });
})();

export const createRandomUP = (address) => {
  return {
    id: faker.number.int(),
    address: address,
    name: faker.person.fullName(),
    description: faker.lorem.paragraph(7),
    profileImage: [{ url: faker.image.avatar() }],
    backgroundImage: [
      {
        url: faker.image.urlPicsumPhotos({
          height: 400,
          width: 1200,
        }),
      },
    ],
  };
};

export const data = (() => {
  faker.seed(DAO_GENERATOR_SEED);

  const daos = faker.helpers.multiple(createRandomDAO, {
    count: 40,
  });

  return {
    daos,
  };
})();
