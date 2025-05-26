import { BellOutlined } from "@ant-design/icons";
import { Badge, Menu, type MenuProps } from "antd";
import MyDropDown from "../utility/MyDropDown";
import { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Calender View",
    key: "calender",
  },
  {
    label: "List View",
    key: "list",
    disabled: true,
  },
];
const Navbar = () => {
  const [current, setCurrent] = useState("Calender View");
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <nav className="flex justify-between items-center h-full">
      <div className="flex items-center justify-between w-full">
        <div className="w-full">
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </div>
        <div className="flex justify-center items-center gap-3">
          <Badge count={0} showZero>
            <BellOutlined className="text-2xl" />
          </Badge>
          <MyDropDown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
