import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";

const MyDropDown = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "My Account",
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: "My Profile",
      extra: "⌘P",
    },
    {
      key: "3",
      label: "Subscription",
      extra: "⌘S",
    },
    {
      key: "4",
      label: "Logout",
      extra: "⌘L",
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Button className="border-0">My Profile</Button>
      </a>
    </Dropdown>
  );
};

export default MyDropDown;
