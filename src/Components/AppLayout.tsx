import { App, Layout } from "antd";
import MenuBar from "./MenuBar";
import Navbar from "./Navbar";
import Calendar from "./Calendar";

const AppLayout = () => {
  const { Header, Sider, Content } = Layout;
  return (
    <App>
      <Layout className="0 text-white min-h-screen hidden 2xl:flex">
        <Sider className="bg-[#3DBCA2]" width={"250px"}>
          <MenuBar />
        </Sider>
        <Layout>
          <Header className="bg-white border  shadow-md">
            <Navbar />
          </Header>
          <Content>
            <Calendar />
          </Content>
        </Layout>
      </Layout>
      <div className="min-h-[calc(100vh-96px)]  flex 2xl:hidden items-center justify-center font-bold text-xl">
        Please Login Through Computer To Access
      </div>
    </App>
  );
};

export default AppLayout;
