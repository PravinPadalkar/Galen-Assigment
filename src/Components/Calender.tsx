import { Badge, Calendar as AntCalender, Modal } from "antd";
import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";
import CalenderHeader from "../utility/CalenderHeader";
import type { BookedSlotsDetailsType } from "../Helper/types";
import { useState } from "react";

type MyCalenderProps = {
  bookedSlotsDetails: BookedSlotsDetailsType[];
};
type modalData = {
  modalId: string;
  slotTime: string;
  doctorName: string;
  patientName: string;
  familyMember: string | undefined;
  email: string;
  note: string | undefined;
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
      <Modal
        title="Slot Details"
        open={isModalOpen}
        onCancel={() => setIsModelOpen(false)}
        onOk={() => setIsModelOpen(false)}
      >
        {modalData && (
          <>
            <p>
              <strong>Patient:</strong> {modalData.patientName}
            </p>
            <p>
              <strong>Email:</strong> {modalData.email}
            </p>
            <p>
              <strong>Slot Time:</strong> {modalData.slotTime}
            </p>
            <p>
              <strong>Doctor:</strong> {modalData.doctorName}
            </p>
            <p>
              <strong>Family Members:</strong> {modalData.familyMember}
            </p>
            <p>
              <strong>Note:</strong> {modalData.note}
            </p>
          </>
        )}
      </Modal>
    </>
  );
};

export default Calender;
