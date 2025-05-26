import { Divider, Steps } from "antd";
import type { Dayjs } from "dayjs";
import StepOneContent from "./StepOneContent";
import StepTwoContent from "./StepTwoContent";
import StepThreeContent from "./StepThreeContent";
import { useState } from "react";
import dayjs from "dayjs";

type AppointmentDrawerPropsType = {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  selectedSlot: string | undefined;
  setSelectedSlot: React.Dispatch<React.SetStateAction<string | undefined>>;
};
const AppointmentDrawer = ({ current, setCurrent, selectedSlot, setSelectedSlot }: AppointmentDrawerPropsType) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs().startOf("day"));

  const [selectedDoctorId, setSelectedDoctorId] = useState<string | undefined>(undefined);
  // console.log(selectedDate.format("DD/MM/YYYY"), selectedDate.format("ddd"));
  const steps = [
    {
      title: "Select Doctor",
      content: <StepOneContent selectedDoctorId={selectedDoctorId} setSelectedDoctorId={setSelectedDoctorId} />,
    },
    {
      title: "Pick a Slot",
      content: (
        <StepTwoContent
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
          selectedDoctorId={selectedDoctorId}
          setSelectedDoctorId={setSelectedDoctorId}
        />
      ),
    },
    {
      title: "Patient's Details",
      content: (
        <StepThreeContent
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedDoctorId={selectedDoctorId}
          setSelectedDoctorId={setSelectedDoctorId}
          setSelectedSlot={setSelectedSlot}
          selectedSlot={selectedSlot}
          current={current}
          setCurrent={setCurrent}
        />
      ),
    },
  ];
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  return (
    <div>
      <Steps current={current} items={items} size="small" className="w-[500px] mx-auto mb-8" />
      <Divider />
      <div>{steps[current].content}</div>
    </div>
  );
};

export default AppointmentDrawer;
