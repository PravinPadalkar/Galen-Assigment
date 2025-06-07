import { App, Layout } from "antd";
import MenuBar from "./MenuBar";
import { Outlet } from "react-router";

const AppLayout = () => {
  const { Sider } = Layout;

  return (
    <App>
      <Layout className="0 text-white min-h-screen hidden sm:flex">
        <Sider className="bg-[#3DBCA2]" width={"250px"}>
          <MenuBar />
        </Sider>
        <Outlet />
      </Layout>
      <div className="min-h-[calc(100vh-96px)]  flex sm:hidden items-center justify-center font-bold text-xl">
        Please Login Through Computer To Access
      </div>
    </App>
  );
};

export default AppLayout;
