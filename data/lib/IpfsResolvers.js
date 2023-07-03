export const ipfsUrlToNormal = (url) => {
  if (url?.includes("ipfs://")) {
    const cid = url.replace("ipfs://", "");
    return `https://${cid}.ipfs.w3s.link/`;
  }
  return url;
  //return url.replace("ipfs://", "https://ipfs.io/ipfs/");
};

export const ipfsUrlResolver = (cid) => {
  return `https://${cid}.ipfs.w3s.link/`;
};

export const ipfsAddressResolver = (cid) => {
  return `ipfs://${cid}`;
};
