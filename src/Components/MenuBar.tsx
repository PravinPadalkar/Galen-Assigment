import { CalendarOutlined, HistoryOutlined, MedicineBoxFilled } from "@ant-design/icons";
import { Button, Divider } from "antd";
import React from "react";

const MenuBar = () => {
  return (
    <section className="flex flex-col items-center justify-center py-4 px-2  bg-[#3DBCA2]">
      <div className="flex gap-2">
        <h1 className="text-3xl font-bold">Doctors4U</h1>
        <MedicineBoxFilled className="text-3xl" />
      </div>
      <Divider>Menu</Divider>
      <div className="w-full">
        <Button icon={<CalendarOutlined />} iconPosition="start" size="large" ghost block className="border-0 text-xl">
          Appointments
        </Button>
        <Button icon={<HistoryOutlined />} iconPosition="start" size="large" block ghost className="border-0 text-xl">
          Past Appointments
        </Button>
      </div>
    </section>
  );
};

export default MenuBar;
