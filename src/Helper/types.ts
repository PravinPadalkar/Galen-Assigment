export enum SlotDurationEnum {
  thirty = 30,
  sixty = 60,
}
export interface DoctorsWeeklyScheduleType {
  doctorId: string;
  isAvailable: boolean;
  dayOfWeek: string;
  slotStartTime: string;
  slotEndTime: string;
}
export interface doctorDetailsType {
  doctorId: string;
  doctorName: string;
  slotDuration: SlotDurationEnum;
}

export interface BookedSlotsDetailsType {
  doctorId: string;
  date: string;
  doctorName: string;
  bookedSlots: string[];
  slotInfo: slotInfoType[];
}
export interface slotInfoType {
  slotTime: string;
  patientName: string;
  familyMembers: string;
  emailId: string;
  note?: string;
}
