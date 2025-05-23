import { Button, Form, Input, type FormProps } from "antd";
type StepOneContentPropType = {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
};

type FieldType = {
  patientName: string;
  name?: string;
  email?: string;
  note?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const StepThreeContent = ({ current, setCurrent }: StepOneContentPropType) => {
  return (
    <Form layout="vertical">
      <div className="h-[600px] flex flex-col justify-between">
        <div>
          <h1 className="text-2xl mb-8">Enter Patient's Details</h1>
          <div>
            <Form.Item<FieldType>
              label="patientName"
              name="patientName"
              rules={[{ required: true, message: "Please Enter the Patient's Name!" }]}
            >
              <Input />
            </Form.Item>
            <h2 className="mb-2 font-bold">Family Member's Info (Optional)</h2>
            <Form.Item<FieldType> label="name" name="name">
              <Input />
            </Form.Item>
            <Form.Item<FieldType> label="Email ID" name="email">
              <Input />
            </Form.Item>
            <Form.Item<FieldType> label="Note" name="note">
              <Input />
            </Form.Item>
          </div>
        </div>
        <div className="flex gap-4">
          <Button type="primary" onClick={() => console.log("first")}>
            Save
          </Button>
          <Button onClick={() => setCurrent((prev) => prev - 1)}>Previous</Button>
        </div>
      </div>
    </Form>
  );
};

export default StepThreeContent;
