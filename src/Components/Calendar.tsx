import { Badge, Calendar as AntCalender, Modal, Button, Popconfirm } from "antd";
import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";
import CalenderHeader from "../utility/CalenderHeader";
import type { ModalSlotDetails } from "../Helper/types";
import { useState } from "react";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import useApp from "antd/es/app/useApp";
import { useDoctorDetails } from "../hooks/useDoctorDetails";
import dayjs from "dayjs";

const Calendar = () => {
  const { message } = useApp();
  const { bookedSlotsDetails, setBookedSlotsDetails, setIsAppointmentDrawerOpen, setIsEditingDetails } =
    useDoctorDetails();

  const [modalSlotDetails, setModalSlotDetails] = useState<ModalSlotDetails>();
  const [isModalOpen, setIsModelOpen] = useState<boolean>(false);
  const confirmDelete = (date: string, time: string) => {
    try {
      setBookedSlotsDetails((prev) => {
        return prev.map((item) => {
          if (dayjs(item.date).format("DD/MM/YYYY").localeCompare(date) === 0) {
            return {
              ...item,
              bookedSlots: item.bookedSlots.filter(
                (slotTime) => dayjs(slotTime).format("hh:mm:A").localeCompare(time) !== 0
              ),
              slotInfo: item.slotInfo.filter(
                (slots) => dayjs(slots.slotTime).format("hh:mm:A").localeCompare(time) !== 0
              ),
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
    return bookedSlotsDetails.find((item) => {
      return value.format("DD/MM/YYYY") == dayjs(item.date).format("DD/MM/YYYY");
    });
  };

  // console.log(isEditingDetails);
  //To Pass Data From The List
  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData?.slotInfo.map(({ emailId, familyMembers, patientName, slotTime, note }, i) => (
          <li key={i}>
            <Badge
              status="success"
              text={`${listData.doctorName}/${patientName}/${dayjs(slotTime).format("hh:mm:A")}`.slice(0, 15) + "..."}
              onClick={() => {
                setIsModelOpen(true);
                setModalSlotDetails({
                  familyMember: familyMembers,
                  modalId: i.toString(),
                  note: note,
                  patientName: patientName,
                  email: emailId,
                  slotTime: dayjs(slotTime).format("hh:mm:A"),
                  doctorName: listData.doctorName,
                  slotDate: value.format("DD/MM/YYYY"),
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
          //editing Icon
          <Popconfirm
            key="editConfirm"
            title="Edit the Appointment"
            description="Are you sure to edit this Appointment?"
            onConfirm={() => {
              // console.log(modalSlotDetails);
              setIsEditingDetails(modalSlotDetails);
              setIsModelOpen(false);
              setIsAppointmentDrawerOpen(true);
            }}
            okText="Yes"
            cancelText="No"
          >
            <Button
              key="submit"
              shape="circle"
              color="default"
              disabled={dayjs(modalSlotDetails?.slotDate).isBefore(dayjs())}
              icon={<EditFilled />}
            ></Button>
          </Popconfirm>,
          <Popconfirm
            key="deleteConfirm"
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
            <Button
              key="submit"
              variant="solid"
              shape="circle"
              color="danger"
              disabled={dayjs(modalSlotDetails?.slotDate).isBefore(dayjs())}
              icon={<DeleteFilled />}
            ></Button>
          </Popconfirm>,
          <Button key="okay" onClick={() => setIsModelOpen(false)} type="primary">
            Okay
          </Button>,
        ]}
      >
        {modalSlotDetails && (
          <div className="flex flex-col gap-3">
            <span>
              <p className="font-bold">Patient Name:</p> <p> {modalSlotDetails.patientName}</p>
            </span>
            <span>
              <p className="font-bold">Email ID:</p>
              <p>{modalSlotDetails.email ?? "N/A"}</p>
            </span>
            <span>
              <p className="font-bold">Slot Time:</p>
              <p> {modalSlotDetails.slotTime + " / " + modalSlotDetails.slotDate}</p>
            </span>
            <span>
              <p className="font-bold">Doctor Name:</p> <p> {modalSlotDetails.doctorName}</p>
            </span>
            <div className="flex gap-16">
              <span>
                <p className="font-bold">Family Members: </p>
                <p>{modalSlotDetails.familyMember ?? "N/A"}</p>
              </span>
              <span>
                <p className="font-bold">Additional Note: </p>
                <p> {modalSlotDetails.note ?? "N/A"}</p>
              </span>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Calendar;
