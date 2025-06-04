import { Layout } from "antd";

import { useEffect, useState } from "react";
import ListView from "../Components/ListView";
import Navbar from "../Components/Navbar";
import Calendar from "../Components/Calendar";

const Appointment = () => {
  const { Header, Content } = Layout;
  const [currContent, setCurrContent] = useState<string>(() => {
    const stored = localStorage.getItem("tab");
    return stored ? JSON.parse(stored) : "calendar";
  });
  useEffect(() => {
    localStorage.setItem("tab", JSON.stringify(currContent));
  }, [currContent]);
  return (
    <Layout className="bg-white">
      <Header className="bg-white border">
        <Navbar currContent={currContent} setCurrContent={setCurrContent} />
      </Header>
      <Content>{currContent == "calendar" ? <Calendar /> : <ListView />}</Content>
    </Layout>
  );
};

export default Appointment;
