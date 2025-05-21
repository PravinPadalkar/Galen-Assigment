import { Badge, Calendar } from "antd";
import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";
import CalenderHeader from "../utility/CalenderHeader";
import type { BookedSlotsDetailsType } from "../Helper/types";

type MyCalenderProps = {
  bookedSlotsDetails: BookedSlotsDetailsType[];
};
const MyCalender = ({ bookedSlotsDetails }: MyCalenderProps) => {
  const getListData = (value: Dayjs) => {
    return bookedSlotsDetails.filter((item) => item.date === value.format("DD/MM/YYYY"));
  };

  //To Pass Data From The List
  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.doctorId}>
            <Badge status="success" text={`${item.doctorName}/${item.patientName}/${item.slotStartTime}`} />
          </li>
        ))}
      </ul>
    );
  };

  //To Render Each Cell and current is dayjs object
  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current) => {
    //we can have info as second para, which shows which mode to select
    return dateCellRender(current);
  };
  return (
    <Calendar
      headerRender={({ value, onChange }) => {
        return <CalenderHeader value={value} onChange={onChange} />;
      }}
      cellRender={cellRender}
    />
  );
};

export default MyCalender;
