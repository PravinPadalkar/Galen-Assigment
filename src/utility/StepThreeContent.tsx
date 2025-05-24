import { Button, Form, Input, type FormProps } from "antd";
import { useDoctorDetails } from "../hooks/useDoctorDetails";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import type { BookedSlotsDetailsType, slotInfoType } from "../Helper/types";

type StepThreeContentPropType = {
  selectedDate: Dayjs;
  setSelectedDate: React.Dispatch<React.SetStateAction<Dayjs>>;
  selectedSlot: string | undefined;
  setSelectedSlot: React.Dispatch<React.SetStateAction<string | undefined>>;
  selectedDoctorId: string | undefined;
  setSelectedDoctorId: React.Dispatch<React.SetStateAction<string | undefined>>;
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
  selectedDoctorId,
  setSelectedDoctorId,
  setSelectedSlot,
  selectedSlot,
}: StepThreeContentPropType) => {
  const { bookedSlotsDetails, setBookedSlotsDetails } = useDoctorDetails();
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    console.log(bookedSlotsDetails);
    const existingDateDetails = bookedSlotsDetails.find((item) => item.date == selectedDate.format("DD/MM/YYYY"));
    let newEntry: BookedSlotsDetailsType;
    if (!existingDateDetails) {
      newEntry = {
        doctorId: "1",
        doctorName: "Test",
        date: selectedDate.format("DD/MM/YYYY"),
        bookedSlots: [selectedSlot as string],
        slotInfo: [
          {
            slotTime: selectedSlot,
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
        bookedSlots: [...existingDateDetails.bookedSlots, selectedSlot as string],
        slotInfo: [
          ...existingDateDetails.slotInfo,
          {
            slotTime: selectedSlot as string,
            patientName: values.patientName,
            emailId: values.email,
            familyMembers: values.name,
            note: values.note,
          } as slotInfoType,
        ],
      };
      console.log(bookedSlotsDetails);
      setBookedSlotsDetails((prevState) =>
        prevState.map((item) => (item.date == existingDateDetails.date ? newEntry : item))
      );
    }
    console.log(existingDateDetails, selectedDoctorId, selectedSlot);
    form.resetFields();
    setSelectedSlot(undefined);
    setSelectedDoctorId(undefined);
    setSelectedDate(dayjs().startOf("day"));
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <h1 className="text-2xl mb-8">Enter Patient's Details</h1>
      <Form form={form} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item<FieldType>
          label="patientName"
          name="patientName"
          rules={[{ required: true, message: "Please Enter the Patient's Name!" }]}
        >
          <Input />
        </Form.Item>
        <h2 className="mb-2 font-bold">Family Member's Info (Optional)</h2>
        <Form.Item<FieldType> label="name" name="name" rules={[{ required: true, message: "Please Enter the Name!" }]}>
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Email ID"
          name="email"
          rules={[{ required: true, message: "Please Enter the email ID!" }]}
        >
          <Input />
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
