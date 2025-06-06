import React, { createContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import {
  type BookedSlotsDetailsType,
  type doctorDetailsType,
  type DoctorsWeeklyScheduleType,
  type ModalSlotDetails,
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
  isEditingDetails: ModalSlotDetails | undefined;
  setIsEditingDetails: React.Dispatch<React.SetStateAction<ModalSlotDetails | undefined>>;
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
    return stored
      ? JSON.parse(stored)
      : [
          {
            doctorId: "1",
            dayOfWeek: "SUN",
            isAvailable: true,
            slotStartTime: "2025-06-02T15:00:00.000Z",
            slotEndTime: "2025-06-02T17:30:00.000Z",
          },
          {
            doctorId: "1",
            dayOfWeek: "MON",
            isAvailable: true,
            slotStartTime: "2025-06-02T15:00:00.000Z",
            slotEndTime: "2025-06-02T17:30:00.000Z",
          },
          {
            doctorId: "1",
            dayOfWeek: "TUE",
            isAvailable: true,
            slotStartTime: "2025-06-02T15:00:00.000Z",
            slotEndTime: "2025-06-02T17:30:00.000Z",
          },
          {
            doctorId: "1",
            dayOfWeek: "WED",
            isAvailable: true,
            slotStartTime: "2025-06-02T15:00:00.000Z",
            slotEndTime: "2025-06-02T17:30:00.000Z",
          },
          {
            doctorId: "1",
            dayOfWeek: "THU",
            isAvailable: true,
            slotStartTime: "2025-06-02T15:00:00.000Z",
            slotEndTime: "2025-06-02T17:30:00.000Z",
          },
          {
            doctorId: "1",
            dayOfWeek: "FRI",
            isAvailable: true,
            slotStartTime: "2025-06-02T15:00:00.000Z",
            slotEndTime: "2025-06-02T17:30:00.000Z",
          },
          {
            doctorId: "1",
            dayOfWeek: "SAT",
            isAvailable: true,
            slotStartTime: "2025-06-02T15:00:00.000Z",
            slotEndTime: "2025-06-02T17:30:00.000Z",
          },
        ];
  });

  const [bookedSlotsDetails, setBookedSlotsDetails] = useState<BookedSlotsDetailsType[]>(() => {
    const stored = localStorage.getItem("bookedSlotDetails");
    return stored
      ? JSON.parse(stored)
      : [
          {
            doctorId: "1",
            doctorName: "Test",
            date: dayjs("02/06/2025", "DD/MM/YYYY").toISOString(),
            bookedSlots: ["2025-06-02T15:00:00.000Z"],
            slotInfo: [
              {
                slotTime: "2025-06-02T15:00:00.000Z",
                patientName: "test",
                emailId: "abc@gmail.com",
                familyMembers: "N/A",
                note: "Immediate Care",
              },
            ],
          },
        ];
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
  useEffect(() => {
    localStorage.setItem("doctersDetails", JSON.stringify(doctersDetails));
    localStorage.setItem("doctorsWeeklySchedule", JSON.stringify(doctorsWeeklySchedule));
    localStorage.setItem("bookedSlotDetails", JSON.stringify(bookedSlotsDetails));
    localStorage.setItem("isAvailabilityDrawerOpen", JSON.stringify(isAvailabilityDrawerOpen));
    localStorage.setItem("isAppointmentDrawerOpen", JSON.stringify(isAppointmentDrawerOpen));
  }, [doctersDetails, doctorsWeeklySchedule, bookedSlotsDetails, isAppointmentDrawerOpen, isAvailabilityDrawerOpen]);
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
      }}
    >
      {children}
    </doctorsDetailsContext.Provider>
  );
};
export default DoctorDetailsProvider;
