import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import dayjs from "dayjs";
import { Dayjs } from "dayjs";
import { useState } from "react";
import AvailabilityDrawer from "./AvailabilityDrawer";
import { SlotDurationEnum, type doctorDetailsType, type DoctorsWeeklyScheduleType } from "../Helper/types";

type CalenderHeaderProps = {
  value: Dayjs;
  onChange: (date: Dayjs) => void;
};
const CalenderHeader = ({ value, onChange }: CalenderHeaderProps) => {
  const [isAvailabilityDrawerOpen, setIsAvailabilityDrawerOpen] = useState(false);
  const [isAppointmentDrawerOpen, setIsAppointmentDrawerOpen] = useState(false);

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
  const handleLeftArrow = () => {
    onChange(value.subtract(1, "month"));
  };
  const handleRightArrow = () => {
    onChange(value.add(1, "month"));
  };
  return (
    <section className="flex  justify-between px-4">
      <div className="p-6  flex gap-8 ">
        <Button type="primary" onClick={() => onChange(dayjs())}>
          Today
        </Button>
        <div className="flex items-center gap-16">
          <Button type="default" shape="circle" icon={<LeftOutlined />} onClick={handleLeftArrow} />
          <p className="text-xl">{value.format("MMM YYYY")}</p>
          <Button type="default" shape="circle" icon={<RightOutlined />} onClick={handleRightArrow} />
        </div>
      </div>
      <div className="flex gap-4 items-center">
        {/* Availability */}
        <Button type="primary" onClick={() => setIsAvailabilityDrawerOpen(true)}>
          set Availability
        </Button>
        <Drawer
          title={<h1 className="text-xl font-bold">Set Availability</h1>}
          width={600}
          onClose={() => setIsAvailabilityDrawerOpen(false)}
          open={isAvailabilityDrawerOpen}
        >
          <AvailabilityDrawer
            doctersDetails={doctersDetails}
            setDoctersDetails={setDoctersDetails}
            doctorsWeeklySchedule={doctorsWeeklySchedule}
            setDoctorsWeeklySchedule={setDoctorsWeeklySchedule}
            setIsAvailabilityDrawerOpen={setIsAvailabilityDrawerOpen}
          />
        </Drawer>

        {/* Appointment */}
        <Button type="primary" onClick={() => setIsAppointmentDrawerOpen(true)}>
          New Appointment
        </Button>
        <Drawer
          title="New Appointment"
          onClose={() => setIsAppointmentDrawerOpen(false)}
          width={600}
          open={isAppointmentDrawerOpen}
        ></Drawer>
      </div>
    </section>
  );
};

export default CalenderHeader;
