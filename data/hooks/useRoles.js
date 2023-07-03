import { useEffect, useState } from "react";

const sampleRoles = [
  {
    name: "Admin",
    description:
      "loreAdipisicing et aute id laborum esse in velit culpa. Do tempor enim pariatur dolor fugiat nisi occaecat qui et excepteur. Irure amet qui quis pariatur do enim eiusmod enim ipsum nostrud ipsum. Esse eu consequat aute et dolore veniam.",
    requirements: {
      items: [
        {
          variant: "token",
          payload: {
            variant: "lsp7",
            tokenAddress: "0x97c31a26553066cb97244708FDa5B3dC5887ABE7",
            tokenAmount: 1000,
          },
        },
        {
          variant: "token",
          payload: {
            variant: "lsp8",
            tokenAddress: "0x56a5c0d7D1b9EE45Cfda7937a69bF1a8ce604da1",
          },
        },
        {
          variant: "whitelist",
          payload: {
            addresses: [
              "0x9BcC604D4381C5b0Ad12Ff3Bf32bEdE063416BC7",
              "0x1780bCf4103D3F501463AD3414c7f4b654bb7aFd",
              "0x7B4f352Cd40114f12e82fC675b5BA8C7582FC513",
            ],
          },
        },
        {
          variant: "roles",
          payload: {
            roles: ["Judge", "Engineer"],
          },
        },
      ],
      relations: "",
    },
  },
  {
    name: "Judge",
    description:
      "Eiusmod enim Lorem nostrud et proident aute. Proident minim cupidatat laborum consectetur ipsum deserunt id aliqua est ullamco consequat enim dolor ad. Amet Lorem nostrud aute cupidatat nostrud sit Lorem reprehenderit velit nostrud esse nostrud. Commodo tempor id anim consequat elit Lorem in minim ea. Consectetur enim velit deserunt laborum aliqua culpa irure ullamco. Dolore enim mollit magna consectetur consequat enim aliquip eu excepteur. Amet mollit in est magna aliqua.",
    requirements: {
      items: [
        {
          variant: "activity",
          payload: {
            daoAddress: "0x9BcC604D4381C5b0Ad12Ff3Bf32bEdE063416BC7",
            variant: "time",
            beforeDate: new Date(),
          },
        },
        {
          variant: "activity",
          payload: {
            daoAddress: "0x1780bCf4103D3F501463AD3414c7f4b654bb7aFd",
            variant: "vote",
            amount: 10000,
          },
        },
        {
          variant: "activity",
          payload: {
            daoAddress: "0x7B4f352Cd40114f12e82fC675b5BA8C7582FC513",
            variant: "proposal",
            amount: 10000,
          },
        },
        {
          variant: "activity",
          payload: {
            daoAddress: "0x9BcC604D4381C5b0Ad12Ff3Bf32bEdE063416BC7",
            variant: "roles",
            roles: ["Judge", "Engineer"],
          },
        },
      ],
      relations: "",
    },
  },
  {
    name: "Engineer",
    description:
      "Reprehenderit magna mollit consequat tempor duis officia ex. In officia consectetur exercitation ea exercitation. Mollit sit ad ex amet. Laboris culpa voluptate aliqua dolor do deserunt magna elit velit laborum cupidatat. Nisi occaecat ipsum elit nulla officia cillum voluptate occaecat ullamco laborum non.",
    requirements: {
      items: [
        {
          variant: "activity",
          payload: {
            daoAddress: "0x3904b8f5b0F49cD206b7d5AABeE5D1F37eE15D8d",
            variant: "time",
            beforeDate: new Date(),
          },
        },
        {
          variant: "whitelist",
          payload: {
            addresses: [
              "0x1780bCf4103D3F501463AD3414c7f4b654bb7aFd",
              "0xB06c856C8eaBd1d8321b687E188204C1018BC4E5",
            ],
          },
        },
        {
          variant: "token",
          payload: {
            variant: "lsp7",
            tokenAddress: "0x97c31a26553066cb97244708FDa5B3dC5887ABE7",
            tokenAmount: 1000,
          },
        },
      ],
      relations: "",
    },
  },
  {
    name: "OG",
    description:
      "Reprehenderit magna mollit consequat tempor duis officia ex. In officia consectetur exercitation ea exercitation. Mollit sit ad ex amet. Laboris culpa voluptate aliqua dolor do deserunt magna elit velit laborum cupidatat. Nisi occaecat ipsum elit nulla officia cillum voluptate occaecat ullamco laborum non.",
    requirements: {
      items: [
        {
          variant: "activity",
          payload: {
            daoAddress: "0x3904b8f5b0F49cD206b7d5AABeE5D1F37eE15D8d",
            variant: "time",
            beforeDate: new Date(),
          },
        },
      ],
      relations: "",
    },
  },
  {
    name: "Sponsor",
    description:
      "Reprehenderit magna mollit consequat tempor duis officia ex. In officia consectetur exercitation ea exercitation. Mollit sit ad ex amet. Laboris culpa voluptate aliqua dolor do deserunt magna elit velit laborum cupidatat. Nisi occaecat ipsum elit nulla officia cillum voluptate occaecat ullamco laborum non.",
    requirements: {
      items: [
        {
          variant: "whitelist",
          payload: {
            addresses: [
              "0x1780bCf4103D3F501463AD3414c7f4b654bb7aFd",
              "0xB06c856C8eaBd1d8321b687E188204C1018BC4E5",
            ],
          },
        },
      ],
      relations: "",
    },
  },
];

const useRoles = () => {
  const [roles, setRoles] = useState([]);
  useEffect(() => {
    // use cache

    setRoles(sampleRoles);
  }, []);

  return roles;
};

export default useRoles;
