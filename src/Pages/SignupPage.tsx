import { Button, Form, Input, Radio, type FormProps } from "antd";
import background from "/background.png";
import { Link } from "react-router";
import type { CheckboxGroupProps } from "antd/es/checkbox";
import { useState } from "react";

type FieldType = {
  email: string;
  phoneNo: string;
  password: string;
  confirmPassword: string;
};

const SignupPage = () => {
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
          title="Sign Up"
        >
          <h1 className="text-3xl font-medium mb-8">Sign Up</h1>
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Enter Email Id" />
          </Form.Item>
          <Form.Item<FieldType>
            label="Phone Number"
            name="phoneNo"
            rules={[{ required: true, message: "Please input Valid Number!" }]}
          >
            <Input placeholder="Enter Phone Number" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter The Password" />
          </Form.Item>
          <Form.Item<FieldType>
            label="Confirm Password"
            name="confirmPassword"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>
          <div className="flex gap-3 items-center my-8">
            <span className="font-medium">Sign Up As :</span>
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
              Already Have Account ?
              <Link to="/login" className="font-bold ml-2">
                Sign In
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

export default SignupPage;
