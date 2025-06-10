import React, { createContext, useEffect, useState } from "react";
import type { ILoggedInUserDetails } from "../Helper/types";
interface IAuthContext {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  loggedInUserDetails: ILoggedInUserDetails | undefined;
  setLoggedInUserDetails: React.Dispatch<React.SetStateAction<ILoggedInUserDetails | undefined>>;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const stored = localStorage.getItem("isAuthenticated");
    return stored ? JSON.parse(stored) : false;
  });
  const [loggedInUserDetails, setLoggedInUserDetails] = useState<ILoggedInUserDetails | undefined>(() => {
    const stored = localStorage.getItem("loggedInUserDetails");
    return stored ? JSON.parse(stored) : undefined;
  });
  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
    localStorage.setItem("loggedInUserDetails", JSON.stringify(loggedInUserDetails));
  }, [isAuthenticated, loggedInUserDetails]);
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, loggedInUserDetails, setLoggedInUserDetails }}>
      {children}
    </AuthContext.Provider>
  );
};
