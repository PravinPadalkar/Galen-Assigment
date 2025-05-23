import { useContext } from "react";
import { doctorsDetailsContext } from "../Provider/DoctorDetailsProvider";

export const useDoctorDetails = () => {
  const context = useContext(doctorsDetailsContext);
  if (context) {
    return context;
  } else {
    throw new Error("Setup Provider Correctly");
  }
};
