import { Button, Form, Input, type FormProps } from "antd";
import { useDoctorDetails } from "../hooks/useDoctorDetails";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import type { BookedSlotsDetailsType, slotInfoType } from "../Helper/types";
import useApp from "antd/es/app/useApp";
import { useEffect } from "react";

type StepThreeContentPropType = {
  selectedDate: Dayjs;
  setSelectedDate: React.Dispatch<React.SetStateAction<Dayjs>>;
  selectedSlot: string | undefined;
  setSelectedSlot: React.Dispatch<React.SetStateAction<string | undefined>>;
  selectedDoctorId: string;
  setSelectedDoctorId: React.Dispatch<React.SetStateAction<string>>;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
};
type FieldType = {
  patientName: string;
  name: string;
  email: string;
  note?: string;
};

const StepThreeContent = ({
  selectedDate,
  setSelectedDate,
  setSelectedDoctorId,
  setSelectedSlot,
  selectedSlot,
  setCurrent,
}: StepThreeContentPropType) => {
  const {
    bookedSlotsDetails,
    setBookedSlotsDetails,
    setIsAppointmentDrawerOpen,
    isEditingDetails,
    setIsEditingDetails,
  } = useDoctorDetails();
  const { message } = useApp();
  const [form] = Form.useForm();

  useEffect(() => {
    if (isEditingDetails) {
      form.setFieldsValue({
        patientName: isEditingDetails.patientName,
        name: isEditingDetails.familyMember,
        email: isEditingDetails.email,
        note: isEditingDetails.note,
      });
    }
  }, []);
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    try {
      const existingDateDetails = bookedSlotsDetails.find(
        (item) => dayjs(item.date).format("DD/MM/YYYY") == selectedDate.format("DD/MM/YYYY")
      );
      let newEntry: BookedSlotsDetailsType;
      //edit
      if (isEditingDetails) {
        setTimeout(() => {
          setBookedSlotsDetails((prevState) => {
            return prevState.map((item) => {
              if (dayjs(item.date).format("DD/MM/YYYY").localeCompare(isEditingDetails.slotDate) === 0) {
                return {
                  ...item,
                  bookedSlots: item.bookedSlots.filter(
                    (slotTime) => dayjs(slotTime).format("hh:mm:A").localeCompare(isEditingDetails.slotTime) !== 0
                  ),
                  slotInfo: item.slotInfo.filter(
                    (slots) => dayjs(slots.slotTime).format("hh:mm:A").localeCompare(isEditingDetails.slotTime) !== 0
                  ),
                };
              }
              return item;
            });
          });
        });
        setIsEditingDetails(undefined);
      }
      if (!existingDateDetails) {
        newEntry = {
          doctorId: "1",
          doctorName: "TestDoctor",
          date: dayjs(selectedDate).toISOString(),
          bookedSlots: [dayjs(selectedSlot, "hh:mm:A").toISOString()],
          slotInfo: [
            {
              slotTime: dayjs(selectedSlot, "hh:mm:A").toISOString(),
              patientName: values.patientName,
              emailId: values.email,
              familyMembers: values.name,
              note: values.note,
            },
          ] as slotInfoType[],
        };
        setBookedSlotsDetails((prevState) => [...prevState, newEntry]);
      } else {
        newEntry = {
          ...existingDateDetails,
          bookedSlots: [...existingDateDetails.bookedSlots, dayjs(selectedSlot, "hh:mm:A").toISOString()],
          slotInfo: [
            ...existingDateDetails.slotInfo,
            {
              slotTime: dayjs(selectedSlot, "hh:mm:A").toISOString(),
              patientName: values.patientName,
              emailId: values.email,
              familyMembers: values.name,
              note: values.note,
            } as slotInfoType,
          ],
        };
        setBookedSlotsDetails((prevState) =>
          prevState.map((item) => (item.date == existingDateDetails.date ? newEntry : item))
        );
      }
      message.success("Appointment Booked Successfully!!!");
      form.resetFields();
      setCurrent(0);
      setSelectedSlot(undefined);
      setSelectedDoctorId("1");
      setSelectedDate(dayjs().startOf("day"));
      setIsAppointmentDrawerOpen(false);
    } catch (e) {
      message.error("Submission Failed");
      // console.log(e);
    }
  };
  return (
    <>
      <h1 className="text-2xl mb-8">Enter Patient's Details</h1>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item<FieldType>
          label="Name of patient"
          name="patientName"
          rules={[{ required: true, message: "Please Enter the Name!" }]}
        >
          <Input />
        </Form.Item>
        <h2 className="mb-2 font-bold">Family Member's Info (Optional)</h2>
        <Form.Item<FieldType> label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item<FieldType> label="Email ID" name="email">
          <Input type="email" />
        </Form.Item>
        <Form.Item<FieldType> label="Note" name="note">
          <Input />
        </Form.Item>
        <Button htmlType="submit" type="primary">
          Save
        </Button>
      </Form>
    </>
  );
};

export default StepThreeContent;
