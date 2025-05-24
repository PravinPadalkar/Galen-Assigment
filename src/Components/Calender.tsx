import { Badge, Calendar as AntCalender } from "antd";
import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";
import CalenderHeader from "../utility/CalenderHeader";
import type { BookedSlotsDetailsType } from "../Helper/types";

type MyCalenderProps = {
  bookedSlotsDetails: BookedSlotsDetailsType[];
};
const Calender = ({ bookedSlotsDetails }: MyCalenderProps) => {
  const getListData = (value: Dayjs) => {
    return bookedSlotsDetails.find((item) => item.date === value.format("DD/MM/YYYY"));
  };

  //To Pass Data From The List
  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);

    return (
      <ul className="events">
        {listData?.slotInfo.map((item, i) => (
          <li key={i}>
            <Badge
              status="success"
              text={`${listData.doctorName}/${item.patientName}/${item.slotTime}`}
              onClick={() => console.log("patientName", item.patientName)}
            />
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
    <AntCalender
      headerRender={({ value, onChange }) => {
        return <CalenderHeader value={value} onChange={onChange} />;
      }}
      cellRender={cellRender}
    />
  );
};

export default Calender;
