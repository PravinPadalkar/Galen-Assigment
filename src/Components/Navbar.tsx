import { BellOutlined } from "@ant-design/icons";
import { Badge, Menu, type MenuProps } from "antd";
import MyDropDown from "../utility/MyDropDown";

type MenuItem = Required<MenuProps>["items"][number];
type NavbarPropType = {
  currContent: string;
  setCurrContent: React.Dispatch<React.SetStateAction<string>>;
};
const items: MenuItem[] = [
  {
    label: "Calendar View",
    key: "calendar",
  },
  {
    label: "List View",
    key: "list",
  },
];
const Navbar = ({ currContent, setCurrContent }: NavbarPropType) => {
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrContent(e.key);
  };

  return (
    <nav className="flex justify-between items-center ">
      <Menu
        onClick={onClick}
        style={{ width: "100%", border: "none", height: "60px" }}
        selectedKeys={[currContent]}
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
