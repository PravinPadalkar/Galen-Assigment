import { BellOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import MyDropDown from "../utility/MyDropDown";

const MyHeader = () => {
  return (
    <nav className="flex justify-between items-center h-full">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-xl font-bold ml-2">Calendar View</h1>
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

export default MyHeader;
