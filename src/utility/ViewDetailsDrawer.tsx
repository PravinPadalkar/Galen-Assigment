import { Avatar } from "antd";
import type { ViewDetailsContentType } from "../Pages/PastAppointment";
import dayjs from "dayjs";
import { UserOutlined } from "@ant-design/icons";
type ViewDetailsDrawerProp = {
  viewDetailsContent: ViewDetailsContentType | undefined;
};

const ViewDetailsDrawer = ({ viewDetailsContent }: ViewDetailsDrawerProp) => {
  return (
    <div className="mx-6">
      <div className="flex gap-20  mb-10">
        <div className="flex gap-3 items-center">
          <Avatar size="large" style={{ backgroundColor: "#87d068" }} icon={<UserOutlined />} />
          <div>
            <p className="text-lg">Doctor </p>
            <p>TestDoctor</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <Avatar size="large" style={{ backgroundColor: "#87d068" }} icon={<UserOutlined />} />
          <div>
            <p className="text-lg">Caregiver </p>
            <p>Nurse Staff</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 gap-y-8 ">
        <span>
          <p className="font-bold opacity-70">Patient Name:</p> <p> {viewDetailsContent?.patientName}</p>
        </span>
        <span>
          <p className="font-bold opacity-70">Email ID:</p>
          <p>{viewDetailsContent?.familyMemEmailId ?? "N/A"}</p>
        </span>
        <span>
          <p className="font-bold opacity-70">Slot Time:</p>
          <p>
            {dayjs(viewDetailsContent?.slotTime).format("hh:mm:A") +
              " / " +
              dayjs(viewDetailsContent?.date).format("DD-MM-YYYY")}
          </p>
        </span>
        <span>
          <p className="font-bold opacity-70">Doctor Name:</p> <p> {viewDetailsContent?.doctorName}</p>
        </span>
        <span>
          <p className="font-bold opacity-70">Family Members: </p>
          <p>{viewDetailsContent?.familyMemName ?? "N/A"}</p>
        </span>
        <span>
          <p className="font-bold opacity-70">Additional Note: </p>
          <p> {viewDetailsContent?.Note ?? "N/A"}</p>
        </span>
      </div>
    </div>
  );
};

export default ViewDetailsDrawer;
