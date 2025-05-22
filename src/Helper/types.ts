export enum SlotDurationType {
  thirty = 30,
  sixty = 60,
}
export interface DoctorsWeeklyScheduleType {
  isChecked: boolean;
  dayOfWeek: string;
  slotStartTime: string;
  slotEndTime: string;
}
export interface doctorDetailsType {
  doctorId: string;
  doctorName: string;
  slotDuration: SlotDurationType;
  doctorsWeeklySchedule: DoctorsWeeklyScheduleType[];
}

export interface BookedSlotsDetailsType {
  doctorId: string;
  date: string;
  slotStartTime: string;
  slotEndTime: string;
  doctorName: string;
  patientName: string;
  familyMembers?: string;
  note?: string;
}
