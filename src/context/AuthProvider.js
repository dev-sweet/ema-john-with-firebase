import React from "react";
import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
// import useFirebase from "./useF";

export const authContext = createContext();
const AuthProvider = ({ children }) => {
  const allContexts = useFirebase();
  return (
    <authContext.Provider value={allContexts}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
