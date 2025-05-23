import React, { createContext, useState } from "react";
import {
  SlotDurationEnum,
  type BookedSlotsDetailsType,
  type doctorDetailsType,
  type DoctorsWeeklyScheduleType,
} from "../Helper/types";

interface DataContextType {
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
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
}
export const dataContext = createContext<DataContextType | undefined>(undefined);

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState("hello");
  const [doctersDetails, setDoctersDetails] = useState<doctorDetailsType[]>([
    {
      doctorId: "1",
      doctorName: "Pravin Padalkar",
      slotDuration: SlotDurationEnum.thirty,
    },
  ]);
  const [doctorsWeeklySchedule, setDoctorsWeeklySchedule] = useState<DoctorsWeeklyScheduleType[]>([
    {
      doctorId: "1",
      dayOfWeek: "SUN",
      isAvailable: true,
      slotStartTime: "9.00 AM",
      slotEndTime: "10.00 AM",
    },
    {
      doctorId: "1",
      dayOfWeek: "MON",
      isAvailable: true,
      slotStartTime: "9.00 AM",
      slotEndTime: "10.00 AM",
    },
    {
      doctorId: "1",
      dayOfWeek: "TUS",
      isAvailable: true,
      slotStartTime: "9.00 AM",
      slotEndTime: "10.00 AM",
    },
    {
      doctorId: "1",
      dayOfWeek: "WED",
      isAvailable: true,
      slotStartTime: "9.00 AM",
      slotEndTime: "10.00 AM",
    },
    {
      doctorId: "1",
      dayOfWeek: "THU",
      isAvailable: true,
      slotStartTime: "9.00 AM",
      slotEndTime: "10.00 AM",
    },
    {
      doctorId: "1",
      dayOfWeek: "FRI",
      isAvailable: true,
      slotStartTime: "9.00 AM",
      slotEndTime: "10.00 AM",
    },
    {
      doctorId: "1",
      dayOfWeek: "SAT",
      isAvailable: false,
      slotStartTime: "9.00 AM",
      slotEndTime: "10.00 AM",
    },
  ]);
  const [bookedSlotsDetails, setBookedSlotsDetails] = useState<BookedSlotsDetailsType[]>([
    {
      doctorId: "1",
      doctorName: "Pravin",
      date: "21/05/2025",
      patientName: "sohel khan",
      bookedSlots: ["10:00 AM", "10:30 AM", "11:30 AM"],
    },
  ]);
  const [isAvailabilityDrawerOpen, setIsAvailabilityDrawerOpen] = useState(false);
  const [isAppointmentDrawerOpen, setIsAppointmentDrawerOpen] = useState(false);
  return (
    <dataContext.Provider
      value={{
        data,
        setData,
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
      }}
    >
      {children}
    </dataContext.Provider>
  );
};
export default DataProvider;
