import { useState, useEffect, useCallback } from "react";
import Web3 from "web3";
import { ethers } from "ethers";
import { DataContext } from "../contexts";
import LSP3 from "@erc725/erc725.js/schemas/LSP3UniversalProfileMetadata.json";
import { ERC725 } from "@erc725/erc725.js";

const RPC_URL = "https://rpc.l16.lukso.network/";

export const DataProvider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [provider, setProvider] = useState(null);
  const [ethersProvider, setEthersProvider] = useState(null);
  const [upAddress, setUpAddress] = useState(null);

  const erc725Config = {
    ipfsGateway: "https://ipfs.io/ipfs/",
  };

  useEffect(() => {
    setWeb3(new Web3(window?.ethereum || RPC_URL));
    setEthersProvider(new ethers.providers.Web3Provider(window.ethereum));
    setProvider(new Web3.providers.HttpProvider(RPC_URL));
  }, []);

  const getUPAddress = useCallback(async () => {
    if (web3) {
      let accounts = await web3.eth.getAccounts();
      if (!accounts.length) {
        await web3.eth.requestAccounts();
        accounts = await web3.eth.getAccounts();
      }
      setUpAddress(accounts[0]);
      return accounts[0];
    }
  }, [web3]);

  const getUPData = useCallback(async (address) => {
    const erc725 = new ERC725(LSP3, address, provider, erc725Config);
    const fetchedData = (await erc725.fetchData("LSP3Profile")).value
      .LSP3Profile;
    return fetchedData;
  });

  const getLSP4Data = useCallback(async (address) => {
    const erc725 = new ERC725(LSP3, address, provider, erc725Config);
    const fetchedData = await erc725.fetchData("LSP4Metadata");
    return fetchedData;
  });

  return (
    <DataContext.Provider
      value={{
        getUPAddress,
        upAddress,
        provider,
        getUPData,
        getUPData,
        getLSP4Data,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
