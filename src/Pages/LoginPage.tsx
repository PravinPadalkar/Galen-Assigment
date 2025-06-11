import { Button, Form, Input, Radio, type FormProps } from "antd";
import background from "/background.png";
import { Link, useNavigate } from "react-router";
import type { CheckboxGroupProps } from "antd/es/checkbox";
import { useState } from "react";
import { useDoctorDetails } from "../hooks/useDoctorDetails";
import { useAuth } from "../hooks/useAuth";
import useApp from "antd/es/app/useApp";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const LoginPage = () => {
  const { message } = useApp();
  const { doctersDetails, nurseDetails } = useDoctorDetails();
  const { setIsAuthenticated, setLoggedInUserDetails } = useAuth();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string>("doctor");

  const RadioOptions: CheckboxGroupProps<string>["options"] = [
    { label: "Doctor", value: "doctor", className: "label-1" },
    { label: "Nurse", value: "nurse", className: "label-2" },
  ];
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (selectedRole == "doctor") {
      const existingUser = doctersDetails.find((user) => user.emailId == values.email);
      if (existingUser && existingUser.password == values.password) {
        // console.log("Authenticate");
        setIsAuthenticated(true);
        setLoggedInUserDetails({
          userId: existingUser.doctorId,
          userFirstName: existingUser.doctorFirstName,
          userLastName: existingUser.doctorLastName,
          userPhoneNo: existingUser.doctorPhoneNo,
          userRole: "doctor",
          userEmailId: existingUser.emailId,
        });
        message.success(
          `Login Successful!!! Welcome ${existingUser.doctorFirstName + " " + existingUser.doctorLastName}`
        );
        navigate("/doctor/appointment");
      } else {
        message.error("Invalid Credentials");
      }
    } else {
      const existingUser = nurseDetails.find((user) => user.emailId == values.email);
      if (existingUser && existingUser.password == values.password) {
        // console.log("Authenticate");
        setIsAuthenticated(true);
        setLoggedInUserDetails({
          userId: existingUser.nurseId,
          userFirstName: existingUser.nurseFirstName,
          userLastName: existingUser.nurseLastName,
          userPhoneNo: existingUser.nursePhoneNo,
          userRole: "nurse",
          userEmailId: existingUser.emailId,
        });
        message.success(
          `Login Successful!!! Welcome ${existingUser.nurseFirstName + " " + existingUser.nurseLastName}`
        );
        navigate("/nurse/appointment");
      } else {
        message.error("Invalid Credentials");
      }
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    message.error("Submission Failed");
  };

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
            <Input placeholder="Enter Email" />
          </Form.Item>
          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter Password" />
          </Form.Item>
          <div className="flex gap-3 items-center my-8">
            <span className="font-medium">Sign In As :</span>
            <Radio.Group
              options={RadioOptions}
              onChange={(e) => setSelectedRole(e.target.value)}
              value={selectedRole}
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
