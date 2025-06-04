import { Badge, Button, DatePicker, Layout, Select, Table } from "antd";
import { Header } from "antd/es/layout/layout";
import MyDropDown from "../utility/DropDown";
import { BellOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { useDoctorDetails } from "../hooks/useDoctorDetails";

const PastAppointment = () => {
  const { bookedSlotsDetails } = useDoctorDetails();
  const { RangePicker } = DatePicker;
  const columns = [
    {
      title: "Date & Time",
      dataIndex: "slot",
      key: "slot",
      width: "20%",
    },
    {
      title: "Doctor",
      dataIndex: "doctor",
      key: "doctor",
      width: "20%",
    },
    {
      title: "CareGiver",
      dataIndex: "caregiver",
      key: "caregiver",
      width: "50%",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: "10%",
    },
  ];
  const dataSource = bookedSlotsDetails.flatMap((dateItem) => {
    return dateItem.slotInfo.map((slot) => {
      return {
        key: slot.slotTime + " " + dateItem.date,
        date: dateItem.date,
        slot: dayjs(dateItem.date).format("Do MMMM YYYY ") + " - " + dayjs(slot.slotTime).format("hh:mm:A"),
        doctor: dateItem.doctorName,
        caregiver: "Nurse",
        action: (
          <Button type="default" style={{ borderRadius: "4px" }}>
            View Details
          </Button>
        ),
      };
    });
  });

  const filteredList = dataSource;

  return (
    <Layout className="bg-white">
      <Header className="bg-white ">
        <div className="flex items-center justify-between h-full">
          <p className="text-3xl ">Appointment Records</p>
          <div className="flex justify-center items-center gap-3">
            <Badge count={0} showZero>
              <BellOutlined className="text-2xl" />
            </Badge>
            <MyDropDown />
          </div>
        </div>
      </Header>
      <section className="min-h-16 flex justify-between items-center text-black mx-8 mt-4 mb-8">
        <div className="flex w-full gap-6">
          <RangePicker className="w-5/12 " />
          <Select mode="multiple" allowClear style={{ width: "100%" }} placeholder="Please select" />
          <Select mode="multiple" allowClear style={{ width: "100%" }} placeholder="Please select" />
        </div>
      </section>
      <Table
        className="mx-4 "
        columns={columns}
        dataSource={filteredList}
        bordered
        scroll={{ x: true }}
        pagination={{ pageSize: 8 }}
      />
    </Layout>
  );
};

export default PastAppointment;
