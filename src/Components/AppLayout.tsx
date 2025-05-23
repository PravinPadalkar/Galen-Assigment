import { Layout } from "antd";
import MenuBar from "./MenuBar";
import Calender from "./Calender";
import Navbar from "./Navbar";
import { useData } from "../hooks/useData";

const AppLayout = () => {
  const { bookedSlotsDetails } = useData();
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
