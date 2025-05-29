import { Button, DatePicker, Table, type DatePickerProps } from "antd";
import { useDoctorDetails } from "../hooks/useDoctorDetails";
// import { UserOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
const ListView = () => {
  const { bookedSlotsDetails } = useDoctorDetails();

  const columns = [
    {
      title: "Date & Time",
      dataIndex: "slot",
      key: "slot",
      innerWidth: 10,
      width: "100px",
    },
    {
      title: "Doctor",
      dataIndex: "doctor",
      key: "doctor",
      width: "300px",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: "50px",
    },
  ];
  const dataSource = bookedSlotsDetails.flatMap((dateItem) => {
    return dateItem.slotInfo.map((slot) => {
      return {
        date: dateItem.date,
        slot: dayjs(dateItem.date, "DD/MM/YYYY").format("DD MMMM ") + " - " + slot.slotTime,
        doctor: dateItem.doctorName,
        action: (
          <Button type="primary" style={{ borderRadius: "4px" }}>
            Start Call
          </Button>
        ),
      };
    });
  });
  console.log(bookedSlotsDetails);
  const onMonthChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <>
      <section className="min-h-16 flex justify-between items-center mx-8 mt-4 mb-8">
        <div className="flex gap-6">
          <Button type="primary">Today</Button>
          <DatePicker onChange={onMonthChange} picker="month" />
        </div>
        <Button type="primary">New Appointment</Button>
      </section>
      <Table className="mx-4 " columns={columns} dataSource={dataSource} bordered scroll={{ x: true }} />
      {/* <div className="flex min-h-16 items-center mx-8 ">
        <span className="font-bold flex-[1] ">Date & Time</span>
        <div className="font-bold flex-[3] ">Doctor</div>
      </div>
      <Divider className="m-0 mx-8  " />
      {BookedSlots.length === 0 ? (
        <div>NO Data</div>
      ) : (
        BookedSlots.map((item, i) => (
          <div key={i} className="flex min-h-14 items-center mx-8 ">
            <span className="flex-[1] ">{dayjs(item.date, "DD/MM/YYYY").format("DD MMMM ") + " - " + item.slot}</span>
            <div className="flex-[3] flex items-center justify-between ">
              <div className="flex gap-2 items-center">
                <Avatar style={{ backgroundColor: "#87d068" }} icon={<UserOutlined />} />
                <span>{item.doctor}</span>
              </div>
              <Button style={{ borderRadius: "4px" }} type="primary">
                Start Call
              </Button>
            </div>
          </div>
        ))
      )} */}
    </>
  );
};

export default ListView;
