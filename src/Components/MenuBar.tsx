import { CalendarOutlined, HistoryOutlined, MedicineBoxFilled } from "@ant-design/icons";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router";

type MenuItem = Required<MenuProps>["items"][number];
const MenuBar = () => {
  const navigate = useNavigate();
  const items: MenuItem[] = [
    { key: "/", icon: <CalendarOutlined />, label: "Appointment" },
    { key: "pastAppointment", icon: <HistoryOutlined />, label: "Past Appointment" },
  ];
  const handleNavigation: MenuProps["onClick"] = (e) => {
    // console.log(e.key);
    navigate(e.key);
  };

  return (
    <section className="flex flex-col items-center justify-center py-4 ">
      <div className="flex gap-2 mb-16">
        <h1 className="text-3xl font-bold">Doctors4U</h1>
        <MedicineBoxFilled className="text-3xl" />
      </div>
      <Menu
        defaultSelectedKeys={["/"]}
        mode="inline"
        className="bg-inherit shadow-none"
        items={items}
        onClick={handleNavigation}
      />
    </section>
  );
};

export default MenuBar;
