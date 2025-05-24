import { Divider, Steps } from "antd";
import type { Dayjs } from "dayjs";
import StepOneContent from "./StepOneContent";
import StepTwoContent from "./StepTwoContent";
import StepThreeContent from "./StepThreeContent";
import { useState } from "react";
import dayjs from "dayjs";

type AppointmentDrawerPropsType = {
  current: number;
};
const AppointmentDrawer = ({ current }: AppointmentDrawerPropsType) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs().startOf("day"));
  const [selectedSlot, setSelectedSlot] = useState<string | undefined>(undefined);
  // console.log(selectedDate.format("DD/MM/YYYY"), selectedDate.format("ddd"));
  const steps = [
    {
      title: "Select Doctor",
      content: <StepOneContent />,
    },
    {
      title: "Pick a Slot",
      content: (
        <StepTwoContent
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
        />
      ),
    },
    {
      title: "Patient's Details",
      content: <StepThreeContent />,
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
