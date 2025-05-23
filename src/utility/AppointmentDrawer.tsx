import { Steps } from "antd";
import { useState } from "react";
import StepOneContent from "./StepOneContent";
import StepTwoContent from "./StepTwoContent";
import StepThreeContent from "./StepThreeContent";

const AppointmentDrawer = () => {
  const [current, setCurrent] = useState<number>(0);
  const steps = [
    {
      title: "Select Doctor",
      content: <StepOneContent current={current} setCurrent={setCurrent} />,
    },
    {
      title: "Pick a Slot",
      content: <StepTwoContent current={current} setCurrent={setCurrent} />,
    },
    {
      title: "Patient's Details",
      content: <StepThreeContent current={current} setCurrent={setCurrent} />,
    },
  ];
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  return (
    <div>
      <Steps current={current} items={items} size="small" className="w-[500px] mx-auto mb-8" />
      <div>{steps[current].content}</div>
    </div>
  );
};

export default AppointmentDrawer;
