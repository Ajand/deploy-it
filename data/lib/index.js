import RelationHelper from "./RelationHelper";

export * from "./FileUpload";
export * from "./IpfsResolvers";
export * from "./DAOCategories";

export const formatAddress = (address) =>
  `${address.substring(0, 6)}...${address.substring(
    address.length - 6,
    address.length
  )}`;

export { RelationHelper };
