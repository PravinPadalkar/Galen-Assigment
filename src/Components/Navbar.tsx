import { BellOutlined } from "@ant-design/icons";
import { Badge, Menu, type MenuProps } from "antd";
import MyDropDown from "../utility/MyDropDown";
import { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Calendar View",
    key: "calendar",
  },
  {
    label: "List View",
    key: "list",
    disabled: true,
  },
];
const Navbar = () => {
  const [current] = useState("Calender View");
  const onClick: MenuProps["onClick"] = (e) => {
    console.log(e);
  };

  return (
    <nav className="flex justify-between items-center ">
      <Menu
        onClick={onClick}
        style={{ width: "100%", border: "none", height: "60px" }}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <div className="flex justify-center items-center gap-3">
        <Badge count={0} showZero>
          <BellOutlined className="text-2xl" />
        </Badge>
        <MyDropDown />
      </div>
    </nav>
  );
};

export default Navbar;
