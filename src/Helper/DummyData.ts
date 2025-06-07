import dayjs from "dayjs";
import type { DoctorWeeklyScheduleType } from "./types";
export const defaultWeeklyScheduleDummyData: DoctorWeeklyScheduleType[] = [
  {
    dayOfWeek: "SUN",
    isAvailable: true,
    slotStartTime: "2025-06-02T15:00:00.000Z",
    slotEndTime: "2025-06-02T17:30:00.000Z",
  },
  {
    dayOfWeek: "MON",
    isAvailable: true,
    slotStartTime: "2025-06-02T15:00:00.000Z",
    slotEndTime: "2025-06-02T17:30:00.000Z",
  },
  {
    dayOfWeek: "TUE",
    isAvailable: true,
    slotStartTime: "2025-06-02T15:00:00.000Z",
    slotEndTime: "2025-06-02T17:30:00.000Z",
  },
  {
    dayOfWeek: "WED",
    isAvailable: true,
    slotStartTime: "2025-06-02T15:00:00.000Z",
    slotEndTime: "2025-06-02T17:30:00.000Z",
  },
  {
    dayOfWeek: "THU",
    isAvailable: true,
    slotStartTime: "2025-06-02T15:00:00.000Z",
    slotEndTime: "2025-06-02T17:30:00.000Z",
  },
  {
    dayOfWeek: "FRI",
    isAvailable: true,
    slotStartTime: "2025-06-02T15:00:00.000Z",
    slotEndTime: "2025-06-02T17:30:00.000Z",
  },
  {
    dayOfWeek: "SAT",
    isAvailable: true,
    slotStartTime: "2025-06-02T15:00:00.000Z",
    slotEndTime: "2025-06-02T17:30:00.000Z",
  },
];
export const defaultBookedSlotDetailsDummyData = [
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
