import React, { createContext, useState } from "react";
import {
  SlotDurationEnum,
  type BookedSlotsDetailsType,
  type doctorDetailsType,
  type DoctorsWeeklyScheduleType,
} from "../Helper/types";

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
}
export const doctorsDetailsContext = createContext<DoctorDetailsContextType | undefined>(undefined);

const DoctorDetailsProvider = ({ children }: { children: React.ReactNode }) => {
  const [doctersDetails, setDoctersDetails] = useState<doctorDetailsType[]>([
    {
      doctorId: "1",
      doctorName: "TestDoctor",
      slotDuration: SlotDurationEnum.sixty,
    },
  ]);
  const [doctorsWeeklySchedule, setDoctorsWeeklySchedule] = useState<DoctorsWeeklyScheduleType[]>([
    {
      doctorId: "1",
      dayOfWeek: "SUN",
      isAvailable: true,
      slotStartTime: "09:00 AM",
      slotEndTime: "12:00 PM",
    },
    {
      doctorId: "1",
      dayOfWeek: "MON",
      isAvailable: true,
      slotStartTime: "09:00 AM",
      slotEndTime: "11:00 AM",
    },
    {
      doctorId: "1",
      dayOfWeek: "TUE",
      isAvailable: true,
      slotStartTime: "09:00 AM",
      slotEndTime: "03:00 PM",
    },
    {
      doctorId: "1",
      dayOfWeek: "WED",
      isAvailable: true,
      slotStartTime: "09:00 AM",
      slotEndTime: "04:00 PM",
    },
    {
      doctorId: "1",
      dayOfWeek: "THU",
      isAvailable: true,
      slotStartTime: "09:00 AM",
      slotEndTime: "10:00 AM",
    },
    {
      doctorId: "1",
      dayOfWeek: "FRI",
      isAvailable: true,
      slotStartTime: "09:00 AM",
      slotEndTime: "12:00 PM",
    },
    {
      doctorId: "1",
      dayOfWeek: "SAT",
      isAvailable: true,
      slotStartTime: "09:00 AM",
      slotEndTime: "11:00 AM",
    },
  ]);
  const [bookedSlotsDetails, setBookedSlotsDetails] = useState<BookedSlotsDetailsType[]>([
    {
      doctorId: "1",
      doctorName: "Test",
      date: "24/05/2025",
      bookedSlots: ["10:00 AM", "10:30 AM", "11:30 AM"],
      slotInfo: [
        {
          slotTime: "10:00 AM",
          patientName: "test",
          emailId: "abc@gmail.com",
          familyMembers: "N/A",
          note: "Immediate Care",
        },
      ],
    },
  ]);
  const [isAvailabilityDrawerOpen, setIsAvailabilityDrawerOpen] = useState(false);
  const [isAppointmentDrawerOpen, setIsAppointmentDrawerOpen] = useState(false);
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
      }}
    >
      {children}
    </doctorsDetailsContext.Provider>
  );
};
export default DoctorDetailsProvider;
