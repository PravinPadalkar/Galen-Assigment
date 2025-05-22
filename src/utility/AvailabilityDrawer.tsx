import { DeleteOutlined } from "@ant-design/icons";
import { Button, Divider, Select, TimePicker, Tooltip, type TabsProps } from "antd";

const AvailabilityDrawer = () => {
  const format = "HH:mm:A";
  return (
    <>
      <div className="flex items-center gap-3">
        <p>Slots With Duration:</p>
        <Select
          defaultValue="thirty"
          size="middle"
          style={{ width: 120 }}
          options={[
            { value: "thirty", label: "30 Min" },
            { value: "sixty", label: "60 Min" },
          ]}
        />
      </div>
      <Divider></Divider>
      <div className="flex items-center justify-between w-[450px]">
        <div className="flex items-center gap-4">
          <input type="checkbox" className="accent-green-600 text-xl w-5 h-5 cursor-pointer"></input>
          <h1 className="text-lg  ">SUN</h1>
        </div>
        <div className="flex gap-2 items-center">
          <TimePicker
            onChange={(e) => console.log(e)}
            placeholder="Start Time"
            showNow={false}
            minuteStep={30}
            format={format}
          ></TimePicker>
          <p>-</p>
          <TimePicker placeholder="End Time" showNow={false} minuteStep={30} format={format}></TimePicker>
        </div>
        <Tooltip title="Delete">
          <Button size="large" color="danger" shape="circle" icon={<DeleteOutlined />} />
        </Tooltip>
      </div>
      <Divider />
    </>
  );
};

export default AvailabilityDrawer;
