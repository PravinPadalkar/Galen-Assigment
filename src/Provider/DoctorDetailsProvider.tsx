import React, { createContext, useEffect, useState } from "react";
import {
  type BookedSlotsDetailsType,
  type doctorDetailsType,
  type DoctorsWeeklyScheduleType,
  type ModalSlotDetails,
  type nurseDetailsType,
} from "../Helper/types";
import { defaultBookedSlotDetailsDummyData, defaultWeeklyScheduleDummyData } from "../Helper/DummyData";

interface DoctorDetailsContextType {
  doctersDetails: doctorDetailsType[];
  setDoctersDetails: React.Dispatch<React.SetStateAction<doctorDetailsType[]>>;
  doctorsWeeklySchedule: DoctorsWeeklyScheduleType[];
  setDoctorsWeeklySchedule: React.Dispatch<React.SetStateAction<DoctorsWeeklyScheduleType[]>>;
  bookedSlotsDetails: BookedSlotsDetailsType[];
  setBookedSlotsDetails: React.Dispatch<React.SetStateAction<BookedSlotsDetailsType[]>>;
  isAvailabilityDrawerOpen: boolean;
  setIsAvailabilityDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isAppointmentDrawerOpen: boolean;
  setIsAppointmentDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isEditingDetails: ModalSlotDetails | undefined;
  setIsEditingDetails: React.Dispatch<React.SetStateAction<ModalSlotDetails | undefined>>;

  //nurse
  nurseDetails: nurseDetailsType[];
  setNurseDetails: React.Dispatch<React.SetStateAction<nurseDetailsType[]>>;
}
export const doctorsDetailsContext = createContext<DoctorDetailsContextType | undefined>(undefined);

const DoctorDetailsProvider = ({ children }: { children: React.ReactNode }) => {
  const [doctersDetails, setDoctersDetails] = useState<doctorDetailsType[]>(() => {
    const stored = localStorage.getItem("doctersDetails");
    return stored
      ? JSON.parse(stored)
      : [
          {
            doctorId: "1",
            doctorName: "TestDoctor",
            slotDuration: "thirty",
          },
        ];
  });

  const [doctorsWeeklySchedule, setDoctorsWeeklySchedule] = useState<DoctorsWeeklyScheduleType[]>(() => {
    const stored = localStorage.getItem("doctorsWeeklySchedule");
    return stored ? JSON.parse(stored) : defaultWeeklyScheduleDummyData;
  });

  const [bookedSlotsDetails, setBookedSlotsDetails] = useState<BookedSlotsDetailsType[]>(() => {
    const stored = localStorage.getItem("bookedSlotDetails");
    return stored ? JSON.parse(stored) : defaultBookedSlotDetailsDummyData;
  });

  const [isAvailabilityDrawerOpen, setIsAvailabilityDrawerOpen] = useState(() => {
    const stored = localStorage.getItem("isAvailabilityDrawerOpen");
    return stored ? JSON.parse(stored) : false;
  });
  const [isAppointmentDrawerOpen, setIsAppointmentDrawerOpen] = useState(() => {
    const stored = localStorage.getItem("isAppointmentDrawerOpen");
    return stored ? JSON.parse(stored) : false;
  });
  const [isEditingDetails, setIsEditingDetails] = useState<ModalSlotDetails | undefined>(undefined);

  const [nurseDetails, setNurseDetails] = useState<nurseDetailsType[]>(() => {
    const stored = localStorage.getItem("nurseDetails");
    return stored
      ? JSON.parse(stored)
      : [
          {
            nurseId: 1,
            nurseEmailId: "AnpadNurse@gmail.com",
            nurseFirstName: "Bot",
            nurseLastName: "Nurse",
            nursePhoneNo: "+1 9875852020",
          },
        ];
  });
  useEffect(() => {
    localStorage.setItem("doctersDetails", JSON.stringify(doctersDetails));
    localStorage.setItem("doctorsWeeklySchedule", JSON.stringify(doctorsWeeklySchedule));
    localStorage.setItem("bookedSlotDetails", JSON.stringify(bookedSlotsDetails));
    localStorage.setItem("isAvailabilityDrawerOpen", JSON.stringify(isAvailabilityDrawerOpen));
    localStorage.setItem("isAppointmentDrawerOpen", JSON.stringify(isAppointmentDrawerOpen));
    localStorage.setItem("nurseDetails", JSON.stringify(nurseDetails));
  }, [
    doctersDetails,
    doctorsWeeklySchedule,
    bookedSlotsDetails,
    isAppointmentDrawerOpen,
    isAvailabilityDrawerOpen,
    nurseDetails,
  ]);
  return (
    <doctorsDetailsContext.Provider
      value={{
        doctersDetails,
        setDoctersDetails,
        doctorsWeeklySchedule,
        setDoctorsWeeklySchedule,
        bookedSlotsDetails,
        setBookedSlotsDetails,
        isAvailabilityDrawerOpen,
        setIsAvailabilityDrawerOpen,
        isAppointmentDrawerOpen,
        setIsAppointmentDrawerOpen,
        isEditingDetails,
        setIsEditingDetails,
        nurseDetails,
        setNurseDetails,
      }}
    >
      {children}
    </doctorsDetailsContext.Provider>
  );
};
export default DoctorDetailsProvider;
