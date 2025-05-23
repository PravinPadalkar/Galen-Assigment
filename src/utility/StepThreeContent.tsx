import { Button, Form, Input, type FormProps } from "antd";

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
const StepThreeContent = () => {
  return (
    <>
      <h1 className="text-2xl mb-8">Enter Patient's Details</h1>
      <Form layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
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
        <Button htmlType="submit" type="primary">
          Save
        </Button>
      </Form>
    </>
  );
};

export default StepThreeContent;
