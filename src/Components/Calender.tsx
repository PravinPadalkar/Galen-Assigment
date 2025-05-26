import { Badge, Calendar as AntCalender, Modal, Button, Popconfirm } from "antd";
import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";
import CalenderHeader from "../utility/CalenderHeader";
import type { ModalSlotDetails } from "../Helper/types";
import { useState } from "react";
import { DeleteFilled } from "@ant-design/icons";
import useApp from "antd/es/app/useApp";
import { useDoctorDetails } from "../hooks/useDoctorDetails";

const Calender = () => {
  const { message } = useApp();
  const { bookedSlotsDetails, setBookedSlotsDetails } = useDoctorDetails();
  const confirmDelete = (date: string, time: string) => {
    try {
      setBookedSlotsDetails((prev) => {
        return prev.map((item) => {
          if (item.date.localeCompare(date)) {
            return {
              ...item,
              bookedSlots: item.bookedSlots.filter((slotTime) => slotTime.localeCompare(time)),
              slotInfo: item.slotInfo.filter((slots) => slots.slotTime.localeCompare(time)),
            };
          }
          return item;
        });
      });
      setIsModelOpen(false);
      message.info("Appointment deleted successfully");
    } catch {
      message.error("Deletion Failed");
    }
  };
  const getListData = (value: Dayjs) => {
    return bookedSlotsDetails.find((item) => item.date === value.format("DD/MM/YYYY"));
  };
  const [modalSlotDetails, setModalSlotDetails] = useState<ModalSlotDetails>();
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
                setModalSlotDetails({
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
      <Modal
        title={<p className="text-base text-center mb-8">Appointment Details</p>}
        open={isModalOpen}
        onCancel={() => setIsModelOpen(false)}
        onOk={() => setIsModelOpen(false)}
        footer={[
          <Popconfirm
            key="popconfirm"
            title="Delete the Appointment"
            description="Are you sure to delete this Appointment?"
            onConfirm={() => {
              if (modalSlotDetails) {
                confirmDelete(modalSlotDetails.slotDate, modalSlotDetails.slotTime);
              }
            }}
            okText="Yes"
            cancelText="No"
          >
            <Button key="submit" variant="solid" shape="circle" color="danger" icon={<DeleteFilled />}></Button>
          </Popconfirm>,
          <Button key="back" onClick={() => setIsModelOpen(false)}>
            Close
          </Button>,
          <Button key="okay" onClick={() => setIsModelOpen(false)} type="primary">
            Okay
          </Button>,
        ]}
      >
        {modalSlotDetails && (
          <div className="flex flex-col gap-3">
            <span>
              <p>Patient Name:</p> <p className="font-bold"> {modalSlotDetails.patientName}</p>
            </span>
            <span>
              <p>Email ID:</p>
              <p className="font-bold"> {modalSlotDetails.email}</p>
            </span>
            <span>
              <p>Slot Time:</p>
              <p className="font-bold"> {modalSlotDetails.slotTime + " / " + modalSlotDetails.slotDate}</p>
            </span>
            <span>
              <p>Doctor Name:</p> <p className="font-bold"> {modalSlotDetails.doctorName}</p>
            </span>
            <div className="flex gap-16">
              <span>
                Family Members: <p className="font-bold">{modalSlotDetails.familyMember}</p>
              </span>
              <span>
                Note: <p className="font-bold"> {modalSlotDetails.note}</p>
              </span>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Calender;
