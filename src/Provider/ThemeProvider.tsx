import { ConfigProvider } from "antd";
import type React from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
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
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
