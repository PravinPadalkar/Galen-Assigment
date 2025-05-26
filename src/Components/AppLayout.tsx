import { App, Layout } from "antd";
import MenuBar from "./MenuBar";
import Calender from "./Calender";
import Navbar from "./Navbar";

const AppLayout = () => {
  const { Header, Sider, Content } = Layout;
  return (
    <App>
      <Layout className="0 text-white min-h-screen">
        <Sider className="bg-[#3DBCA2]" width={"250px"}>
          <MenuBar />
        </Sider>
        <Layout>
          <Header className="bg-white">
            <Navbar />
          </Header>
          <Content className="">
            <Calender />
          </Content>
        </Layout>
      </Layout>
    </App>
  );
};

export default AppLayout;
