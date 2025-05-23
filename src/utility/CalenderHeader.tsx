import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import dayjs from "dayjs";
import { Dayjs } from "dayjs";
import AvailabilityDrawer from "./AvailabilityDrawer";
import AppointmentDrawer from "./AppointmentDrawer";
import { useData } from "../hooks/useData";

type CalenderHeaderProps = {
  value: Dayjs;
  onChange: (date: Dayjs) => void;
};
const CalenderHeader = ({ value, onChange }: CalenderHeaderProps) => {
  const { isAvailabilityDrawerOpen, setIsAvailabilityDrawerOpen } = useData();
  const { isAppointmentDrawerOpen, setIsAppointmentDrawerOpen } = useData();
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
          <AvailabilityDrawer />
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
        >
          <AppointmentDrawer />
        </Drawer>
      </div>
    </section>
  );
};

export default CalenderHeader;
