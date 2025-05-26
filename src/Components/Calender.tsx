import { Badge, Calendar as AntCalender, Modal as AntdModal } from "antd";
import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";
import CalenderHeader from "../utility/CalenderHeader";
import type { BookedSlotsDetailsType, modalData } from "../Helper/types";
import { useState } from "react";
import Modal from "../utility/Modal";

type MyCalenderProps = {
  bookedSlotsDetails: BookedSlotsDetailsType[];
};

const Calender = ({ bookedSlotsDetails }: MyCalenderProps) => {
  const getListData = (value: Dayjs) => {
    return bookedSlotsDetails.find((item) => item.date === value.format("DD/MM/YYYY"));
  };
  const [modalData, setModalData] = useState<modalData | undefined>(undefined);
  const [isModalOpen, setIsModelOpen] = useState<boolean>(false);
  //To Pass Data From The List
  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);

    return (
      <ul className="events">
        {listData?.slotInfo.map(({ emailId, familyMembers, patientName, slotTime, note }, i) => (
          <li key={i}>
            <Badge
              status="success"
              text={`${listData.doctorName}/${patientName}/${slotTime}`}
              onClick={() => {
                setIsModelOpen(true);
                setModalData({
                  familyMember: familyMembers,
                  modalId: i.toString(),
                  note: note,
                  patientName: patientName,
                  email: emailId,
                  slotTime: slotTime,
                  doctorName: listData.doctorName,
                  slotDate: value.format("DD-MM-YYYY"),
                });
              }}
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
    <>
      <AntCalender
        headerRender={({ value, onChange }) => {
          return <CalenderHeader value={value} onChange={onChange} />;
        }}
        cellRender={cellRender}
      />
      <AntdModal
        title={<p className="text-base text-center mb-8">Appointment Details</p>}
        open={isModalOpen}
        onCancel={() => setIsModelOpen(false)}
        onOk={() => setIsModelOpen(false)}
      >
        <Modal modalData={modalData} />
      </AntdModal>
    </>
  );
};

export default Calender;
