export enum SlotDurationEnum {
  thirty = 30,
  sixty = 60,
}
export interface DoctorWeeklyScheduleType {
  isAvailable: boolean;
  dayOfWeek: string;
  slotStartTime: string;
  slotEndTime: string;
}
export interface DoctorsWeeklyScheduleListType {
  doctorId: string;
  doctorWeeklySchedule: DoctorWeeklyScheduleType[];
}
export interface doctorDetailsType {
  doctorId: string;
  doctorName: string;
  slotDuration: SlotDurationEnum;
  emailId: string;
  password: string;
}
export interface nurseDetailsType {
  nurseId: string;
  nurseFirstName: string;
  nurseLastName: string;
  nursePhoneNo: string;
  emailId: string;
  password: string;
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

export type ModalSlotDetails = {
  modalId: string;
  slotDate: string;
  slotTime: string;
  doctorName: string;
  patientName: string;
  familyMember: string | undefined;
  email: string;
  note: string | undefined;
};

export interface ILoggedInUserDetails {
  userId: string;
  userRole: string;
  userFirstName: string;
  userLastName?: string;
  userEmailId?: string;
  userPhoneNo?: string;
}
