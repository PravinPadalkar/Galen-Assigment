import { CalendarOutlined, HistoryOutlined, MedicineBoxFilled } from "@ant-design/icons";
import { Button, Divider, Menu } from "antd";
import type { MenuProps } from "antd";
import { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];
const MenuBar = () => {
  const items: MenuItem[] = [
    { key: "1", icon: <CalendarOutlined />, label: "Appointment" },
    { key: "2", icon: <HistoryOutlined />, label: "Past Appointment" },
  ];
  return (
    <section className="flex flex-col items-center justify-center py-4 ">
      <div className="flex gap-2 mb-16">
        <h1 className="text-3xl font-bold">Doctors4U</h1>
        <MedicineBoxFilled className="text-3xl" />
      </div>
      <Menu defaultSelectedKeys={["1"]} mode="inline" className="bg-inherit shadow-none" items={items} />
    </section>
  );
};

export default MenuBar;
