import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import dayjs from "dayjs";
import { Dayjs } from "dayjs";

type CalenderHeaderProps = {
  value: Dayjs;
  onChange: (date: Dayjs) => void;
};
const CalenderHeader = ({ value, onChange }: CalenderHeaderProps) => {
  const handleLeftArrow = () => {
    onChange(value.subtract(1, "month"));
  };
  const handleRightArrow = () => {
    onChange(value.add(1, "month"));
  };
  return (
    <section className="flex justify-between px-4">
      <div className="p-6 flex gap-8 ">
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
        <Button type="primary">set Availability</Button>
        <Button type="primary">New Appointment</Button>
      </div>
    </section>
  );
};

export default CalenderHeader;
