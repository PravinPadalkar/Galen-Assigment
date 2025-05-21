import { ConfigProvider } from "antd";
import "./App.css";
import MyLayout from "./Components/MyLayout";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#3DBCA2",
        },
        components: {
          Calendar: {
            fullBg: "#e6f7ff", // background of selected cell
            fullPanelBg: "#3DBCA2",
            itemActiveBg: "#ebeff0", // active date background
            colorBgTextActive: "#1677ff", // active date text color
          },
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyLayout />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
