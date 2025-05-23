import { useContext } from "react";
import { dataContext } from "../Provider/DataProvider";

export const useData = () => {
  const context = useContext(dataContext);
  if (context) {
    return context;
  } else {
    throw new Error("Setup Provider Correctly");
  }
};
