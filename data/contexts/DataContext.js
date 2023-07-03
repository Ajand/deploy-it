import { createContext } from "react";

const DataContext = createContext({
  getUPAddress: async () => {},
  getUPData: async () => {},
  getLSP4Data: async () => {},
  upAddress: null,
  provider: null,
});

export default DataContext;
