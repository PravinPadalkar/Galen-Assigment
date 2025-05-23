import { Layout } from "antd";

import MenuBar from "./MenuBar";
import Calender from "./Calender";
import { useState } from "react";
import type { BookedSlotsDetailsType } from "../Helper/types";
import Navbar from "./Navbar";

const AppLayout = () => {
  const [bookedSlotsDetails, setBookedSlotsDetails] = useState<BookedSlotsDetailsType[]>([
    {
      doctorId: "1",
      doctorName: "Pravin",
      date: "21/05/2025",
      patientName: "sohel khan",
      bookedSlots: ["10:00 AM", "10:30 AM", "11:30 AM"],
    },
  ]);
  const { Header, Sider, Content } = Layout;
  return (
    <Layout className="0 text-white min-h-screen">
      <Sider className="bg-[#3DBCA2]" width={"250px"}>
        <MenuBar />
      </Sider>
      <Layout>
        <Header className="bg-white">
          <Navbar />
        </Header>
        <Content className="">
          <Calender bookedSlotsDetails={bookedSlotsDetails} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
