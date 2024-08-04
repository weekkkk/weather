import { createContext, useContext } from "react";
import { RootStore } from "../stores";

export const RootStoreContext = createContext<RootStore | null>(null);

export const useRootStore = () => {
  const context = useContext(RootStoreContext);

  if (!context) {
    throw new Error("");
  }

  return context;
};
