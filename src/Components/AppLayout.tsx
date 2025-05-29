import { App, Layout } from "antd";
import MenuBar from "./MenuBar";
import Navbar from "./Navbar";
import Calendar from "./Calendar";
import { useEffect, useState } from "react";
import ListView from "./ListView";

const AppLayout = () => {
  const { Header, Sider, Content } = Layout;
  const [currContent, setCurrContent] = useState<string>(() => {
    const stored = localStorage.getItem("tab");
    return stored ? JSON.parse(stored) : "calendar";
  });
  useEffect(() => {
    localStorage.setItem("tab", JSON.stringify(currContent));
  }, [currContent]);
  return (
    <App>
      <Layout className="0 text-white min-h-screen hidden xl:flex">
        <Sider className="bg-[#3DBCA2]" width={"250px"}>
          <MenuBar />
        </Sider>
        <Layout className="bg-white">
          <Header className="bg-white border">
            <Navbar currContent={currContent} setCurrContent={setCurrContent} />
          </Header>
          <Content>{currContent == "calendar" ? <Calendar /> : <ListView />}</Content>
        </Layout>
      </Layout>
      <div className="min-h-[calc(100vh-96px)]  flex xl:hidden items-center justify-center font-bold text-xl">
        Please Login Through Computer To Access
      </div>
    </App>
  );
};

export default AppLayout;
