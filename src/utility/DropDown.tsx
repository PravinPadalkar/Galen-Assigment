import { LogoutOutlined, MoneyCollectOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Button, Dropdown as AntdDropDown } from "antd";
import { Link } from "react-router";

const DropDown = () => {
  const items: MenuProps["items"] = [
    {
      key: "2",
      label: "Profile",
      icon: <UserOutlined />,
    },
    {
      key: "3",
      label: "Subscription",
      icon: <MoneyCollectOutlined />,
    },
    {
      key: "4",
      label: "Logout",
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <AntdDropDown menu={{ items }} trigger={["click"]}>
      <Link to="#" onClick={(e) => e.preventDefault()}>
        <Button
          type="text"
          color="primary"
          className="outline-none border-0 text-lg"
          icon={<Avatar icon={<UserOutlined />} />}
        >
          Head Doctor
        </Button>
      </Link>
    </AntdDropDown>
  );
};

export default DropDown;
