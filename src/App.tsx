import { Layout } from "antd";
import "./App.css";
import MyHeader from "./Components/MyHeader";
import MenuBar from "./Components/MenuBar";
import MyCalender from "./Components/MyCalender";

function App() {
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
}

export default App;
