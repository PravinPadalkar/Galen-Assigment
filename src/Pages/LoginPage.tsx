import { Button, Form, Input, Radio, type FormProps } from "antd";
import background from "/background.png";
import { Link } from "react-router";
import type { CheckboxGroupProps } from "antd/es/checkbox";
import { useState } from "react";
import { useDoctorDetails } from "../hooks/useDoctorDetails";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const LoginPage = () => {
  const { doctersDetails, nurseDetails } = useDoctorDetails();
  const RadioOptions: CheckboxGroupProps<string>["options"] = [
    { label: "Doctor", value: "doctor", className: "label-1" },
    { label: "Nurse", value: "nurse", className: "label-2" },
  ];
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [selectedRole, setSelectedRole] = useState<string>("doctor");

  return (
    <section className="flex">
      <img src={background} className="h-[100vh]"></img>
      <div className="flex w-full items-center justify-center">
        <Form
          name="Login Form"
          className="w-[500px] p-8 shadow-sm"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          title="Sign In"
        >
          <h1 className="text-3xl font-medium mb-8">Sign In</h1>
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <div className="flex gap-3 items-center my-8">
            <span className="font-medium">Sign In As :</span>
            <Radio.Group
              options={RadioOptions}
              optionType="button"
              onChange={(e) => setSelectedRole(e.target.value)}
              value={selectedRole}
              buttonStyle="solid"
            />
          </div>
          <div className="mb-8">
            <p>
              Don't Have Account ?
              <Link to="/signup" className="font-bold ml-2">
                SignUp
              </Link>
            </p>
          </div>
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default LoginPage;
