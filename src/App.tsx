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
