import { Layout } from "antd";
import MyHeader from "./MyHeader";
import MenuBar from "./MenuBar";
import MyCalender from "./MyCalender";

const MyLayout = () => {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Layout className="0 text-white min-h-screen">
      <Sider className="bg-[#3DBCA2]" width={"250px"}>
        <MenuBar />
      </Sider>
      <Layout>
        <Header className="bg-white">
          <MyHeader />
        </Header>
        <Content className="">
          <MyCalender />
        </Content>
        <Footer className="">Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
