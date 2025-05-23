import "./App.css";

import { Routes, Route } from "react-router";
import AppLayout from "./Components/AppLayout";
import ThemeProvider from "./Provider/ThemeProvider";
import DataProvider from "./Provider/DoctorDetailsProvider";

function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <Routes>
          <Route path="/" element={<AppLayout />} />
        </Routes>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
